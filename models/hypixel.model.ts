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