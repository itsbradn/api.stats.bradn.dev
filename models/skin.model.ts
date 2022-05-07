import { Schema, model, Types } from "mongoose";

export interface ISkin {
    id: Types.ObjectId,
    _id: string,
    textureId: string,
    tags: Array<string>,
    loves: Array<Types.ObjectId>
}

const skinSchema = new Schema<ISkin>({
    textureId: {
        type: String,
        required: true
    },
    tags: [],
    loves: [],
})

export default model<ISkin>('Skin', skinSchema)