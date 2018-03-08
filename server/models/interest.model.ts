import { Schema, Types, model } from 'mongoose';
import { ValidateUtils } from '../utils/validators.util';

const InterestSchema = new Schema({
    name: {
        type: String,
        required: String,
        maxlength: 255,
        validate: {
            validator: (name) => {
                return ValidateUtils.nameValidator(name);
            },
            msg: 'camp name given invalid'
        }
    }
});

model('interest', InterestSchema);