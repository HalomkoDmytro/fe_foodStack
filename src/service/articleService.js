import ArticleAPI from '../api/articleAPI'
import FileAPI from '../api/fileAPI'


const getArticle = async (id) => {
    return new ArticleAPI().getArticle(id);
}

const getAllArticleList = async ({page = 0, size = 8, sortBy = 'id', sortDir = "DESC"}) => {
    return new ArticleAPI().getAllArticle({page, size, sortBy, sortDir});
}

const getArticleList = async ({theme = 'DESSERT', page = 0, size = 8, sortBy = 'id', sortDir = "DESC"}) => {
    return new ArticleAPI().getArticleByTheme({theme, page, size, sortBy, sortDir});
}

const searchArticleList = async ({request, page = 0, size = 4, sortBy = 'id', sortDir = "DESC"}) => {
    return new ArticleAPI().searchArticleListApi({request, page, size, sortBy, sortDir});
}

const deleteArticle = async (id) => {
    return new ArticleAPI().deleteArticle(id);
}

const updateOrCreateArticle =  async (rawData) => {

    uploadCoverImg(rawData)
        .then(rd => updateLinkToUploadedFile(rd).then(data => {
                const body = {
                    id: data.id,
                    srcImg: data.srcImg,
                    theme: data.theme,
                    title: data.h1Title,
                    description: data.description,
                    titlePicture: data.titlePicture,
                    visible: data.visible,
                    paragraph: convertParagraph(data)
                }

                return new ArticleAPI().updateArticle(body)
                        .then((res) => console.log("updateOrCreateArticle res: ", res))
                        .catch((err) => console.log("updateOrCreateArticle err", err));
            }));

}

const uploadCoverImg = async data => {
    if(data && data.srcImg) {
        const fileApi = new FileAPI();
        const imgUrl = await fileApi.uploadFile(data.srcImg);
        data.srcImg = imgUrl;
    }

    return data;
}

const updateLinkToUploadedFile = async data => {
        const fileApi = new FileAPI();
        data.paragraphList =  data.paragraphList
                .map(async par =>  {
                    if(par.type !== 'PICTURE') return par;

                    const imgUrl = await fileApi.uploadFile(par.file);
                    if(imgUrl) {
                        par.data = imgUrl;
                    } else {
                        console.log("problem with upload img");
                    }
                    return par;
                }
            );

        data.paragraphList = await Promise.all(data.paragraphList);
        return data;
}

const convertParagraph = data => {

    if(data.paragraphList) {
        return  data.paragraphList.map((par) => {

            return {
                orderPosition: par.order,
                type: par.type,
                data: par.data,
            }
        });
    }

    return [];
}

export {getArticle, getAllArticleList, getArticleList, searchArticleList, updateOrCreateArticle, deleteArticle};