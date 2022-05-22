import { Schema, model, Types } from "mongoose";

export interface ISkin {
    id: Types.ObjectId,
    _id: string,
    emojiId: string,
    emojiName: string,
    createdAt: Date,
    createdBy: Types.ObjectId,
}

const skinSchema = new Schema<ISkin>({
    emojiId: String,
    emojiName: {
        type: String,
        required: true
    },
    createdAt: Date,
    createdBy: Types.ObjectId,
})

export default model<ISkin>('Skin', skinSchema)