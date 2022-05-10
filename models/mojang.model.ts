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
    usernameHistory: Array<IMojangUsernameHistory>,
    skinHistory: Array<IMojangSkinHistory>,
    capeHistory: Array<IMojangCapeHistory>,
    cacheData: {
        playerDataRefreshAt: Date,
        textureRefreshAt: Date,
    },
    connectionAuthCode: number,
    connectionAuthCodeRefreshAt: Date,
    ownerId: Types.ObjectId,
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
    cacheData: {
        playerDataRefreshAt: Date,
        textureRefreshAt: Date
    },
    connectionAuthCode: Number,
    connectionAuthCodeRefreshAt: Date,
    ownerId: Types.ObjectId,
})

export default model<IMojang>('Mojang', mojangSchema)