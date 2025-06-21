import {basicRequest} from './api-utils';

export default class ParagraphAPI {

    deleteParagraph = async (id) => {
        basicRequest(`paragraph/${id}`, 'DELETE', null);
    }

}