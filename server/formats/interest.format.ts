import { Document } from 'mongoose';

export interface IInterest {
    name: string;
}

export class Interest {
    name: string;
}

export interface IInterestModel extends IInterest, Document {

}