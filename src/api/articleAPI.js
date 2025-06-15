import {basicRequest} from './api-utils';

export default class ArticleAPI {

    async getArticle(id) {
            return basicRequest(`article/${id}`, 'GET', null);
    }

    async getAllArticle(data) {
        return basicRequest('article/light', 'POST', data);
    }

    async getArticleByTheme(data) {
        return basicRequest('article/theme', 'POST', data);
    }

    updateArticle = async (body) => {
        basicRequest(`article`, 'POST', body);
    }

}