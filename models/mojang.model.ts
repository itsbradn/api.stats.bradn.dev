import { Schema, model, Types } from "mongoose";

export interface IMojangUsernameHistory {
    username: string,
    usernameApplicationDate: Date,
}

export interface IMojangSkinHistory {
    textureId: string,
    textureApplicationDate: Date,
}

export interface IMojangCapeHistory {
    textureId: string,
    textureApplicationDate: Date,
}

export interface IMojang {
    id: Types.ObjectId,
    _id: string,
    username: string,
    uuid: string,
    usernameHistory: Types.DocumentArray<IMojangUsernameHistory>,
    skinHistory: Types.DocumentArray<IMojangSkinHistory>,
    capeHistory: Types.DocumentArray<IMojangCapeHistory>,
    cacheRefreshAt: Date,
    connectionAuthCode: number,
    connectionAuthCodeRefreshAt: Date,
}

const mojangSchema = new Schema<IMojang>({
    username: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    usernameHistory: [],
    skinHistory: [],
    capeHistory: [],
    cacheRefreshAt: {
        type: Date,
        required: true
    },
    connectionAuthCode: Number,
    connectionAuthCodeRefreshAt: Date,
})

export default model<IMojang>('Mojang', mojangSchema)