import { User } from './User';
import { Document } from './Document';

export interface Coment {

    uid: string
    text: string
    document: Document
    user: User


}
