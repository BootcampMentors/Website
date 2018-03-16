import { IUser } from '../formats/User.format';
import { IValidationError, ValidationError } from '../formats/ValidationError.format';

import { isEmail, isAlpha } from 'validator';

const lengthMustBeBetween = (type: string, str: string, min: number, max: number) => {
    const typeCap = type[0].toUpperCase() + type.slice(1);
    if (str.length <= min) {
        return new ValidationError(type, `${typeCap} must be at least ${min} characters`);
    }
    if (str.length >= max) {
        return new ValidationError(type, `${typeCap} must be at most ${max} characters`);
    }
    return null;
};

const getLengthErrors = (user: IUser): Array<IValidationError> => {
    const errors: Array<IValidationError> = [];
    let error = lengthMustBeBetween('name', user.name, 2, 255);
    if (error) {
        errors.push(error);
    }
    error = lengthMustBeBetween('password', user.password, 3, 255);
    if (error) {
        errors.push(error);
    }
    error = lengthMustBeBetween('email', user.email, 2, 255);
    if (error) {
        errors.push(error);
    }
    return errors;
};

const getInvalidStringErrors = (user: IUser): Array<IValidationError> => {
    const errors: Array<IValidationError> = [];
    if (!isEmail(user.email)) {
        errors.push(new ValidationError('email', 'Email is invalid'));
    }

    const nameParts = user.name.split(' ');
    for (let part of nameParts) {
        if (!isAlpha(part)) {
            errors.push(new ValidationError('name', 'Name can only contain letters'));
            break;
        }
    }
    if (user.camp.toString().length === 0) {
        errors.push(new ValidationError('camp', 'Bootcamp must be chosen'));
    }
    return errors;
};

const isPasswordsNotSame = (password: string, confirmPassword: string): IValidationError | null => {
    if (password === confirmPassword) {
        return null;
    } else {
        return new ValidationError('password', 'Passwords do not match');
    }
};

export const validateUser = (user: IUser): Array<IValidationError> => {
    const errors: Array<IValidationError> = getInvalidStringErrors(user);
    getLengthErrors(user).forEach((error) => errors.push(error));
    const passwordNotMatch = isPasswordsNotSame(user.password, user.confirmPassword);
    if (passwordNotMatch) {
        errors.push(passwordNotMatch);
    }
    return errors;
};