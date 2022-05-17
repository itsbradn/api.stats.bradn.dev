import { Schema, model, Types } from "mongoose";
import { HYPIXEL_RANK, HYPIXEL_RANK_COLOR, HYPIXEL_PLUS_COLOR } from '../constant/hypixel.constant';

export interface HypixelStat {
    value: string | number,
    date: Date,
}

export interface HypixelSection {
    value: number | string,
    history: Array<HypixelStat>
}

export interface IHypixel {
    id: Types.ObjectId,
    _id: string,
    uuid: string,
    connections: {
        firstLogin: Date,
        lastLogin: Date,
        lastLogout: Date,
    },
    networkExp: number,
    networkLevel: number,
    karma: number,
    achievements: {
        points: number
    },
    rank: {
        current: HYPIXEL_RANK | string,
        rankColor: HYPIXEL_RANK_COLOR | string,
        plusColor: HYPIXEL_PLUS_COLOR | string,
        history: Array<{type: HYPIXEL_RANK, timePurchased: Date}>
    },
    stats: {
        "TNTGames": {
            "coins": HypixelSection,
            "wins": HypixelSection
            "modes": {
                tnt_tag: {
                    kills: HypixelSection,
                    wins: HypixelSection,
                    deaths: HypixelSection,
                },
                tnt_run: {
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    record: HypixelSection,
                },
                pvp_run: {
                    deaths: HypixelSection,
                    kills: HypixelSection,
                    wins: HypixelSection,
                    record: HypixelSection,
                },
                bow_spleef: {
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    tags: HypixelSection,
                },
                wizards: {
                    wins: HypixelSection,
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    assists: HypixelSection,
                    classes: {
                        current: string,
                        ancient: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                        blood: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                        fire: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                        hydro: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                        ice: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                        kinetic: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                        storm: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                        toxic: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                        wither: {
                            kills: HypixelSection,
                            deaths: HypixelSection,
                            assists: HypixelSection,
                            power: HypixelSection,
                            regen: HypixelSection,
                        },
                    }
                }
            }
        },
        "Duels": {
            coins: HypixelSection,
            lootChests: number,
            winstreaks: {
                best: HypixelSection,
                current: HypixelSection,
            },
            division: {
                name: string,
                level: string,
                color: string,
            },
            kills: HypixelSection,
            deaths: HypixelSection,
            wins: HypixelSection,
            losses: HypixelSection,
            swings: HypixelSection,
            hits: HypixelSection,
            arrowsShot: HypixelSection,
            arrowsHit: HypixelSection,
            modes: {
                'uhc_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    kd: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'uhc_doubles': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'uhc_four': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'uhc_meetup': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'op_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'op_doubles': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'sw_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'sw_doubles': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'bow_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'blitz_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'mw_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'sumo_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'bowspleef_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'parkour_eight': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'boxing_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'classic_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'potion_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
                'combo_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                },
            },
            bridgeModes: {
                'bridge_duel': {
                    division: {
                        name: string,
                        level: string,
                        color: string,
                    },
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                    goals: HypixelSection,
                },
                'bridge_doubles': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                    goals: HypixelSection,
                },
                'bridge_threes': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                    goals: HypixelSection,
                },
                'bridge_four': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                    goals: HypixelSection,
                },
                'bridge_2v2v2v2': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                    goals: HypixelSection,
                },
                'bridge_3v3v3v3': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                    goals: HypixelSection,
                },
                'capture_threes': {
                    winstreaks: {
                        best: HypixelSection,
                        current: HypixelSection,
                    },
                    kills: HypixelSection,
                    deaths: HypixelSection,
                    wins: HypixelSection,
                    losses: HypixelSection,
                    swings: HypixelSection,
                    hits: HypixelSection,
                    arrowsShot: HypixelSection,
                    arrowsHit: HypixelSection,
                    goals: HypixelSection,
                },
            }
        }
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
    networkExp: Number,
    networkLevel: Number,
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
    stats: {
        "TNTGames": {
            coins: {
                value: Number,
                history: Array
            },
            wins: {
                value: Number,
                history: Array
            },
            modes: {
                tnt_tag: {
                    kills: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                },
                tnt_run: {
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    record: {
                        value: Number,
                        history: Array
                    },
                },
                pvp_run: {
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    record: {
                        value: Number,
                        history: Array
                    },
                },
                bow_spleef: {
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    tags: {
                        value: Number,
                        history: Array
                    },
                },
                wizards: {
                    wins: {
                        value: Number,
                        history: Array
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    assists: {
                        value: Number,
                        history: Array
                    },
                    classes: {
                        current: String,
                        ancient: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                        blood: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                        fire: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                        hydro: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                        ice: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                        kinetic: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                        storm: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                        toxic: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                        wither: {
                            kills: {
                                value: Number,
                                history: Array
                            },
                            deaths: {
                                value: Number,
                                history: Array
                            },
                            assists: {
                                value: Number,
                                history: Array
                            },
                            power: {
                                value: Number,
                                history: Array
                            },
                            regen: {
                                value: Number,
                                history: Array
                            },
                        },
                    }
                }
            }
        },
        "Duels": {
            coins: {
                        value: Number,
                        history: Array
                    },
            lootChests: Number,
            winstreaks: {
                best: {
                        value: Number,
                        history: Array
                    },
                current: {
                        value: Number,
                        history: Array
                    },
            },
            division: {
                name: String,
                level: String,
                color: String,
            },
            kills: {
                        value: Number,
                        history: Array
                    },
            deaths: {
                        value: Number,
                        history: Array
                    },
            wins: {
                        value: Number,
                        history: Array
                    },
            losses: {
                        value: Number,
                        history: Array
                    },
            swings: {
                        value: Number,
                        history: Array
                    },
            hits: {
                        value: Number,
                        history: Array
                    },
            arrowsShot: {
                        value: Number,
                        history: Array
                    },
            arrowsHit: {
                        value: Number,
                        history: Array
                    },
            modes: {
                'uhc_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'uhc_doubles': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'uhc_four': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'uhc_meetup': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'op_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'op_doubles': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'sw_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'sw_doubles': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'bow_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'blitz_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'mw_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'sumo_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'bowspleef_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'parkour_eight': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'boxing_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'classic_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'potion_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
                'combo_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                },
            },
            bridgeModes: {
                'bridge_duel': {
                    division: {
                        name: String,
                        level: String,
                        color: String,
                    },
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                    goals: {
                        value: Number,
                        history: Array
                    },
                },
                'bridge_doubles': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                    goals: {
                        value: Number,
                        history: Array
                    },
                },
                'bridge_threes': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                    goals: {
                        value: Number,
                        history: Array
                    },
                },
                'bridge_four': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                    goals: {
                        value: Number,
                        history: Array
                    },
                },
                'bridge_2v2v2v2': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                    goals: {
                        value: Number,
                        history: Array
                    },
                },
                'bridge_3v3v3v3': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                    goals: {
                        value: Number,
                        history: Array
                    },
                },
                'capture_threes': {
                    winstreaks: {
                        best: {
                        value: Number,
                        history: Array
                    },
                        current: {
                        value: Number,
                        history: Array
                    },
                    },
                    kills: {
                        value: Number,
                        history: Array
                    },
                    deaths: {
                        value: Number,
                        history: Array
                    },
                    wins: {
                        value: Number,
                        history: Array
                    },
                    losses: {
                        value: Number,
                        history: Array
                    },
                    swings: {
                        value: Number,
                        history: Array
                    },
                    hits: {
                        value: Number,
                        history: Array
                    },
                    arrowsShot: {
                        value: Number,
                        history: Array
                    },
                    arrowsHit: {
                        value: Number,
                        history: Array
                    },
                    goals: {
                        value: Number,
                        history: Array
                    },
                },
            }
        }
    },
    gifted: {
        ranks: Number,
    },
    refreshAt: Date,
});

export default model<IHypixel>('Hypixel', hypixelSchema);