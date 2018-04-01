import { Schema, Types, model } from 'mongoose';
import { ValidateUtils } from '../utils/validators.util';
import * as uniqueValidator from 'mongoose-unique-validator';

const CampSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true,
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
    ],
    admins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
}, { timestamps: true });

CampSchema.plugin(uniqueValidator);

model('camp', CampSchema);