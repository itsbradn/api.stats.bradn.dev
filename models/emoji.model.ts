import { Schema, model, Types } from "mongoose";

export interface IEmoji {
    id: Types.ObjectId,
    _id: string,
    emojiId: string,
    emojiName: string,
    createdAt: Date,
    createdBy: Types.ObjectId,
}

const emojiSchema = new Schema<IEmoji>({
    emojiId: {
        type: String,
        required: true,
        unique: true,
    },
    emojiName: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: Date,
    createdBy: Types.ObjectId,
})

export default model<IEmoji>('Emoji', emojiSchema)