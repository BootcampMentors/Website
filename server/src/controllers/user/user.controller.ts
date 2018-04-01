import { GetUserController } from './user.get';
import { PostUserController } from './user.post';
import { PutUserController } from './user.put';
import { DeleteUserController } from './user.delete';
import { ServerResponse } from '../../formats/serverresponse.format';

export const UserController = {

    // the examples in each of these controllers are only optional
    // and only to be used as a guide

    get: GetUserController,
    post: PostUserController,
    put: PutUserController,
    delete: DeleteUserController
};

export const getUserNotExistMessage = () => {
    return new ServerResponse(false, null, 'user does not exist');
};