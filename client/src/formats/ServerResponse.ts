export interface IServerResponse<T> {
    success: boolean;
    error?: string;
    output: T;
}