import {extendWithAuthToken, getOptions, basicRequest} from './api-utils';

export default class ArticleAPI {

    async getArticle(id) {
        const url = `http://localhost:8080/article/${id}`;
        const defaultOptions = getOptions('GET');
        const options = extendWithAuthToken(defaultOptions, null);
        return fetch(url, options);
    }

    updateArticle = async (body) => {
        basicRequest(`article`, 'POST', body);
    }

}