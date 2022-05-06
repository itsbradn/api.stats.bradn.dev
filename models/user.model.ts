
import { Schema, model, Document, Types } from "mongoose";
import { genSalt, hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { ErrorDescription } from "mongodb";

export interface IUser {
    id: Types.ObjectId,
    _id: string,
    username: string,
    email: string,
    verified: boolean,
    activationAuthCode: string,
    activationAuthCodeRefreshAt: Date,
    password: string,
    getSignedToken: Function,
    matchPassword: Function,
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: [true, 'Please Provide a username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please provide a valid email"
        ]
    },
    verified: {
        type: Boolean,
        default: false
    },
    activationAuthCode: String,
    activationAuthCodeRefreshAt: {
        type: Date,
        default: new Date(Date.now() + (parseInt(process.env.EMAIL_CODE_REFRESH_MINUTES || "5") * 60 * 1000)),
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [7, "Your password doesn't meet the length requirement"],
        select: false
    }
});

userSchema.post('save', function(error: ErrorDescription, doc: Document, next: Function) {
    if (error.name === 'MongoError' && error.code === 11000) {
      next(new Error('Someone has already used this email or username.'));
    } else {
      next(error);
    }
  });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await genSalt(14);
    this.password = await hash(this.password, salt);
    next();
});

userSchema.methods.getSignedToken = function() {
    return sign({ id: this._id }, process.env.JWT_SECRET || "nosecret", { expiresIn: process.env.JWT_EXPIRE || '90d' });
}

userSchema.methods.matchPassword = async function(password: string) {
    return await compare(password, this.password);
}

export default model<IUser>('User', userSchema);