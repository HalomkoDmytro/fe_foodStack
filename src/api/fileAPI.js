import {uploadFileRequest} from './api-utils';

export default class FileAPI {

    uploadFile = formData => {
        return uploadFileRequest(`api/upload`, 'POST', formData);
    }

}