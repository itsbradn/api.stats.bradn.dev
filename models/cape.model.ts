import { Schema, model, Types } from "mongoose";

export interface ICape {
    id: Types.ObjectId,
    _id: string,
    textureId: string,
    tags: Array<string>,
    loves: Array<Types.ObjectId>
}

const capeSchema = new Schema<ICape>({
    textureId: {
        type: String,
        required: true
    },
    tags: [],
    loves: [],
});

export default model<ICape>('Cape', capeSchema)