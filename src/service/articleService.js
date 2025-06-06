import ArticleAPI from '../api/articleAPI'


const updateOrCreateArticle = data => {

    const requestData = {
        id: data.id,
        title: data.h1Title,
        description: data.description,
        titlePicture: data.titlePicture,
        visible: data.visible,
        paragraph: convertParagraph(data)
    }

    return new ArticleAPI().updateArticle(requestData)
            .then((res) => console.log("ArticleServiceAPI. updateOrCreateArticle: ", res))
            .catch((err) => console.log(err));
}

const convertParagraph = data => {

    if(data.paragraphList) {
        return data.paragraphList.map((par) => {
            return {
                orderPosition: par.order,
                type: par.type,
                data: par.data,
                file: par.file
            }
        });
    }

    return [];
}

export {updateOrCreateArticle};