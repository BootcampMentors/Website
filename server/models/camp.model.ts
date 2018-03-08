import { Schema, Types, model } from 'mongoose';
import { ValidateUtils } from '../utils/validators.util';

const CampSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
        validate: {
            validator: (name) => {
                return ValidateUtils.nameValidator(name);
            },
            msg: 'camp name given invalid'
        }
    },
    mentors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    mentees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
}, { timestamps: true });

model('camp', CampSchema);