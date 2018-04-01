import { GetCampController } from './camp.get';
import { PostCampController } from './camp.post';
import { ServerResponse } from '../../formats/serverresponse.format';

export const CampController = {

    // the examples in each of these controllers are only optional
    // and only to be used as a guide

    get: GetCampController,
    post: PostCampController
};

export const getCampNotExistMessage = () => {
    return new ServerResponse(false, null, 'camp does not exist');
};