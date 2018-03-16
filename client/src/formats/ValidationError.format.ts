export interface IValidationError {
    errorType: string;
    message: string;
}

export class ValidationError implements IValidationError {
    errorType: string;
    message: string;
    constructor(errorType: string, message: string) {
        this.errorType = errorType;
        this.message = message;
    }
}