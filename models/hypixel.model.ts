import { Schema, model, Types } from "mongoose";
import { HYPIXEL_RANK, HYPIXEL_RANK_COLOR, HYPIXEL_PLUS_COLOR } from '../constant/hypixel.constant';

interface HypixelStat {
    value: string,
    date: Date,
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
            "coins": {
                value: number,
                history: Array<HypixelStat>
            },
            "wins": {
                value: number,
                history: Array<HypixelStat>
            },
            "modes": {
                tnt_tag: {
                    kills: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    wins: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    deaths: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                },
                tnt_run: {
                    deaths: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    wins: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    record: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                },
                pvp_run: {
                    deaths: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    kills: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    wins: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    record: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                },
                bow_spleef: {
                    deaths: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    wins: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    tags: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                },
                wizards: {
                    wins: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    kills: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    deaths: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    assists: {
                        value: number,
                        history: Array<HypixelStat>
                    },
                    classes: {
                        current: string,
                        ancient: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                        blood: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                        fire: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                        hydro: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                        ice: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                        kinetic: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                        storm: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                        toxic: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                        wither: {
                            kills: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            deaths: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            assists: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            power: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                            regen: {
                                value: number,
                                history: Array<HypixelStat>
                            },
                        },
                    }
                }
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
        }
    },
    gifted: {
        ranks: Number,
    },
    refreshAt: Date,
});

export default model<IHypixel>('Hypixel', hypixelSchema);