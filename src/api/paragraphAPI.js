import {basicRequest} from './api-utils';

export default class ParagraphAPI {

    deleteParagraph = async (id) => {
        basicRequest(`secure/paragraph/${id}`, 'DELETE', null);
    }

}