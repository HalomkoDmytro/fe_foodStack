import {basicRequest} from './api-utils';

export default class ArticleAPI {

    async getAllArticle(data) {
        return basicRequest('auth/signin', 'POST', data);
    }

}