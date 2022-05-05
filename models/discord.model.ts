
import { Schema, model, Types } from "mongoose";

export interface IDiscord {
    id: Types.ObjectId,
    _id: string,
    username: string,
    discriminator: string,
    linkedId: string,
    addedAt: Date,
    refreshAt: Date,
}

const discordSchema = new Schema<IDiscord>({
    username: {
        type: String,
        required: [true, 'Please Provide a username'],
        unique: true
    },
    discriminator: {
        type: String,
        required: true
    },
    linkedId: {
        type: String,
        required: true
    },
    addedAt: {
        type: Date,
        required: true,
    },
    refreshAt: {
        type: Date,
        required: true,
    }
});

export default model<IDiscord>('Discord', discordSchema);