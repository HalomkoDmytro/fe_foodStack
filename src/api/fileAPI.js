import {uploadFileRequest} from './api-utils';

export default class FileAPI {

    uploadFile = formData => {
        return uploadFileRequest(`secure/api/upload`, 'POST', formData);
    }

}