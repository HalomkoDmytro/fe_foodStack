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

    async searchArticleListApi(data) {
        return basicRequest('article/search', 'POST', data);
    }

    updateArticle = async (body) => {
        basicRequest(`secure/article`, 'POST', body);
    }

    deleteArticle = async (id) => {
        basicRequest(`secure/article/${id}`, 'DELETE', null);
    }

}