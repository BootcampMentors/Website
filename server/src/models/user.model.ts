import { Schema, model } from 'mongoose';
import { ValidateUtils } from '../utils/validators.util';
import * as uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255,
        validate: {
            validator: (name) => {
                return ValidateUtils.nameValidator(name);
            },
            msg: 'name given invalid'
        }
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true,
        validate: {
            validator: (email) => {
                return /[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.+_-]+\.[a-zA-Z]+$/.test(email);
            },
            msg: 'email given invalid'
        }
    },
    password: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2,
        validate: {
            validator: (pass) => {
                return /^[A-Za-z\d$@$!%*?&]+$/.test(pass);
            },
            msg: 'password given invalid'
        }
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isMentor: {
        type: Boolean,
        default: false
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
    camp: {
        type: Schema.Types.ObjectId,
        ref: 'camp',
        required: true
    },
    interests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'interest'
        }
    ]
}, { timestamps: true });

UserSchema.plugin(uniqueValidator);

model('user', UserSchema);