import { GetCampController } from './camp.get';
import { PostCampController } from './camp.post';
import { PutCampController } from './camp.put';
import { DeleteCampController } from './camp.delete';

export const CampController = {
    get: GetCampController,
    post: PostCampController,
    put: PutCampController,
    delete: DeleteCampController
};