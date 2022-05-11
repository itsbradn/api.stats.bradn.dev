import { Schema, model, Types } from "mongoose";
import { HYPIXEL_RANK, HYPIXEL_RANK_COLOR, HYPIXEL_PLUS_COLOR } from '../constant/hypixel.constant';


export interface IHypixel {
    id: Types.ObjectId,
    _id: string,
    uuid: string,
    connections: {
        firstLogin: Date,
        lastLogin: Date,
        lastLogout: Date,
    },
    karma: number,
    achievements: {
        points: Number
    },
    rank: {
        current: HYPIXEL_RANK | string,
        rankColor: HYPIXEL_RANK_COLOR | string,
        plusColor: HYPIXEL_PLUS_COLOR | string,
        history: Array<{type: HYPIXEL_RANK, timePurchased: Date}>
    },
    gifted: {
        ranks: number,
    },
    refreshAt: Date,
}

const hypixelSchema = new Schema<IHypixel>({
    uuid: {
        type: String,
        required: true
    },
    connections: {
        firstLogin: Date,
        lastLogin: Date,
        lastLogout: Date
    },
    karma: Number,
    achievements: {
        points: Number,
    },
    rank: {
        current: String,
        rankColor: String,
        plusColor: String,
        history: Array<{type: String, timePurchased: Date}>()
    },
    gifted: {
        ranks: Number,
    },
    refreshAt: Date,
});

export default model<IHypixel>('Hypixel', hypixelSchema);