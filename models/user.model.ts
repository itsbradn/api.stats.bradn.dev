
import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please Provide a username'],
        unique: [true, 'This username is already in use']
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, 'This email is already in use'],
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please provide a valid email"
        ]
    },
    verified: {
        type: Boolean,
        default: false
    },
    activationCode: {
        type: String
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [7, "Your password doesn't meet the length requirement"],
        select: false
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
    return sign({ id: this._id }, process.env.JWT_SECRET || "nosign", { expiresIn: process.env.JWT_EXPIRE || '90d' });
}

userSchema.methods.matchPassword = async function(password: string) {
    return await compare(password, this.password);
}

export default model('User', userSchema);