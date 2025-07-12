import ArticleAPI from '../api/articleAPI'
import FileAPI from '../api/fileAPI'

const articleAPI = new ArticleAPI();
const fileAPI = new FileAPI();

const getArticle = async (id) => {
    return articleAPI.getArticle(id);
}

const getAllArticleList = async ({page = 0, size = 8, sortBy = 'id', sortDir = "DESC"}) => {
    return articleAPI.getAllArticle({page, size, sortBy, sortDir});
}

const getArticleList = async ({theme = 'DESSERT', page = 0, size = 8, sortBy = 'id', sortDir = "DESC"}) => {
    return articleAPI.getArticleByTheme({theme, page, size, sortBy, sortDir});
}

const searchArticleList = async ({request, page = 0, size = 4, sortBy = 'id', sortDir = "DESC"}) => {
    return articleAPI.searchArticleListApi({request, page, size, sortBy, sortDir});
}

const deleteArticle = async (id) => {
    return articleAPI.deleteArticle(id);
}

const createArticle =  async (rawData) => {
    uploadCoverImg(rawData)
        .then(rd => createLinkToUploadedFile(rd)
        .then(data => {
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

                return articleAPI.updateArticle(body)
                        .then((res) => console.log("createArticle res: ", res))
                        .catch((err) => console.log("createArticle err", err));
            })
        );
}

const updateArticle =  async (rawData) => {

    updateCoverImg(rawData)
        .then(rd => updateLinkToUploadedFile(rd)
        .then(data => {
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

                return articleAPI.updateArticle(body);
            })
        );
}

const updateCoverImg = async data => {
    if(data?.srcImgFile && data.isUpdated) {
        const imgUrl = await fileAPI.uploadFile(data.srcImgFile);
        data.srcImg = imgUrl;
    }

    return data;
}

const uploadCoverImg = async data => {
    if(data?.srcImg) {
        const imgUrl = await fileAPI.uploadFile(data.srcImg);
        data.srcImg = imgUrl;
    }

    return data;
}

const updateLinkToUploadedFile = async data => {
        data.paragraphList =  data.paragraphList
            .map(async par =>  {
                if(par.type !== 'PICTURE') return par;

                if(par.isChanged) {
                    const imgUrl = await fileAPI.uploadFile(par.file);
                    if(imgUrl) {
                        par.data = imgUrl;
                    } else {
                        console.log("problem with upload img");
                    }
                    return par;
                } else {
                    return par;
                }

            }
        );

        data.paragraphList = await Promise.all(data.paragraphList);
        return data;
}

const createLinkToUploadedFile = async data => {
        data.paragraphList =  data.paragraphList
                .map(async par =>  {
                    if(par.type !== 'PICTURE') return par;
                    const imgUrl = await fileAPI.uploadFile(par.file);
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
    return data.paragraphList?.map(par => ({
        orderPosition: par.order,
        type: par.type,
        data: par.data,
    })) || [];
}

export {
    getArticle,
    getAllArticleList,
    getArticleList,
    searchArticleList,
    createArticle,
    deleteArticle,
    updateArticle
};