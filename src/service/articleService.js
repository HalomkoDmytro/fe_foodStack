import ArticleAPI from '../api/articleAPI'
import FileAPI from '../api/fileAPI'

const getArticleList = async (tag, from, to) => {

}


const updateOrCreateArticle =  async rawData => {

    updateLinkToUploadedFile(rawData).then(data => {
            const body = {
                id: data.id,
                title: data.h1Title,
                description: data.description,
                titlePicture: data.titlePicture,
                visible: data.visible,
                paragraph: convertParagraph(data)
            }

            return new ArticleAPI().updateArticle(body)
                    .then((res) => console.log("updateOrCreateArticle res: ", res))
                    .catch((err) => console.log("updateOrCreateArticle err", err));
        });

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
    //                     TODO: notify problem with upload img
                            console.log("notify problem with upload img");
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

export {getArticleList, updateOrCreateArticle};