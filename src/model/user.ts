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
    VerifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    message: Message[]
}

const Userchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        Match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please fill a valid email address'],
    }
})