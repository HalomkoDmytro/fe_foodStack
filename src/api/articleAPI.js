import {extendWithAuthToken, getOptions, basicRequest} from './api-utils';

export default class ArticleAPI {

    async getArticle(id) {
            return basicRequest(`article/${id}`, 'GET', null);
    }

    async getArticleByTheme(data) {
        return basicRequest('article/theme', 'POST', data);
    }

    updateArticle = async (body) => {
        basicRequest(`article`, 'POST', body);
    }

}