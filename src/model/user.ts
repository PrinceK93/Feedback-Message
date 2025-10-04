import mongoose, {Schema , Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date;
}

const messageschema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    VerifyCode: string;
}