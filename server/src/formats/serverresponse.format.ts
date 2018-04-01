export interface IServerResponse {
    success: boolean;
    error?: string;
    output: any;
}

export class ServerResponse implements IServerResponse {
    success: boolean;
    error?: string;
    output: any;
    constructor(success: boolean, output: any, error: any = undefined) {
        this.success = success;
        this.output = output;
        if (error) {
            this.error = error;
        }
    }
}