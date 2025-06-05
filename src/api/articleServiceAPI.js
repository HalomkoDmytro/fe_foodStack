import {extendWithAuthToken, getOptions, basicRequest} from './api-utils';

export default class ArticleServiceAPI {

    async getArticle(id) {
        const url = `http://localhost:8080/article/${id}`;
        const defaultOptions = getOptions('GET');
        const options = extendWithAuthToken(defaultOptions, null);
        console.log("getArticle url ", url)
        console.log("options ", options)
        return fetch(url, options);
    }

    updateArticle = async (data) => {
        basicRequest(`article`, 'POST', data);
    }

}