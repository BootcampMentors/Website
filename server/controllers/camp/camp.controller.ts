import { GetCampController } from './camp.get';
import { PostCampController } from './camp.post';
import { ServerResponse } from '../../formats/serverresponse.format';

export const CampController = {
    get: GetCampController,
    post: PostCampController
};

export const getCampNotExistMessage = () => {
    return new ServerResponse(false, null, 'user does not exist');
};