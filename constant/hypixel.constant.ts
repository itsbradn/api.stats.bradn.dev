import { HYPIXEL_ACHIEVEMENTS, HYPIXEL_ONE_TIME_ACHIEVEMENTS} from './hypixelAchievements.constant';

export enum HYPIXEL_RANK {
    DEFAULT,
    VIP,
    VIP_PLUS,
    MVP,
    MVP_PLUS,
    MVP_PLUS_PLUS,
}

export enum HYPIXEL_RANK_COLOR {
    BLUE,
    GOLD
}

export enum HYPIXEL_PLUS_COLOR {
    RED,
    GOLD,
    GREEN,
    YELLOW,
    LIGHT_PURPLE,
    WHITE,
    BLUE,
    DARK_GREEN,
    DARK_RED,
    DARK_AQUA,
    DARK_PURPLE,
    GREY,
    BLACK,
}

export enum HYPIXEL_CHANNEL_TYPE {
    PARTY,
    GUILD,
    PUBLIC,
}

interface HypixelLevelingReward {
    levelingReward_0: boolean,
    levelingReward_1: boolean,
    levelingReward_2: boolean,
    levelingReward_3: boolean,
    levelingReward_4: boolean,
    levelingReward_5: boolean,
    levelingReward_6: boolean,
    levelingReward_7: boolean,
    levelingReward_8: boolean,
    levelingReward_9: boolean,
    levelingReward_10: boolean,
    levelingReward_11: boolean,
    levelingReward_12: boolean,
    levelingReward_13: boolean,
    levelingReward_14: boolean,
    levelingReward_15: boolean,
    levelingReward_16: boolean,
    levelingReward_17: boolean,
    levelingReward_18: boolean,
    levelingReward_19: boolean,
    levelingReward_20: boolean,
    levelingReward_21: boolean,
    levelingReward_22: boolean,
    levelingReward_23: boolean,
    levelingReward_24: boolean,
    levelingReward_25: boolean,
    levelingReward_26: boolean,
    levelingReward_27: boolean,
    levelingReward_28: boolean,
    levelingReward_29: boolean,
    levelingReward_30: boolean,
    levelingReward_31: boolean,
    levelingReward_32: boolean,
    levelingReward_33: boolean,
    levelingReward_34: boolean,
    levelingReward_35: boolean,
    levelingReward_36: boolean,
    levelingReward_37: boolean,
    levelingReward_38: boolean,
    levelingReward_39: boolean,
    levelingReward_40: boolean,
    levelingReward_41: boolean,
    levelingReward_42: boolean,
    levelingReward_43: boolean,
    levelingReward_44: boolean,
    levelingReward_45: boolean,
    levelingReward_46: boolean,
    levelingReward_47: boolean,
    levelingReward_48: boolean,
    levelingReward_49: boolean,
    levelingReward_50: boolean,
    levelingReward_51: boolean,
    levelingReward_52: boolean,
    levelingReward_53: boolean,
    levelingReward_54: boolean,
    levelingReward_55: boolean,
    levelingReward_56: boolean,
    levelingReward_57: boolean,
    levelingReward_58: boolean,
    levelingReward_59: boolean,
    levelingReward_60: boolean,
    levelingReward_61: boolean,
    levelingReward_62: boolean,
    levelingReward_63: boolean,
    levelingReward_64: boolean,
    levelingReward_65: boolean,
    levelingReward_66: boolean,
    levelingReward_67: boolean,
    levelingReward_68: boolean,
    levelingReward_69: boolean,
    levelingReward_70: boolean,
    levelingReward_71: boolean,
    levelingReward_72: boolean,
    levelingReward_73: boolean,
    levelingReward_74: boolean,
    levelingReward_75: boolean,
    levelingReward_76: boolean,
    levelingReward_77: boolean,
    levelingReward_78: boolean,
    levelingReward_79: boolean,
    levelingReward_80: boolean,
    levelingReward_81: boolean,
    levelingReward_82: boolean,
    levelingReward_83: boolean,
    levelingReward_84: boolean,
    levelingReward_85: boolean,
    levelingReward_86: boolean,
    levelingReward_87: boolean,
    levelingReward_88: boolean,
    levelingReward_89: boolean,
    levelingReward_90: boolean,
    levelingReward_91: boolean,
    levelingReward_92: boolean,
    levelingReward_93: boolean,
    levelingReward_94: boolean,
    levelingReward_95: boolean,
    levelingReward_96: boolean,
    levelingReward_97: boolean,
    levelingReward_98: boolean,
    levelingReward_99: boolean,
    levelingReward_109: boolean,
    levelingReward_119: boolean,
    levelingReward_129: boolean,
    levelingReward_139: boolean,
    levelingReward_149: boolean,
    levelingReward_159: boolean,
    levelingReward_169: boolean,
    levelingReward_179: boolean,
    levelingReward_189: boolean,
    levelingReward_199: boolean,
    levelingReward_209: boolean,
    levelingReward_219: boolean,
    levelingReward_224: boolean,
    levelingReward_249: boolean,
}

export interface HypixelData {
    success: boolean,
    player: {
        _id: string,
        /** Hypixel database user id */
        uuid: string,
        /** Mojang UUID */
        firstLogin: number,
        /** Date as Unix Timestamp */
        lastLogin: number,
        /** Date as Unix Timestamp */
        lastLogout: number,
        /** Date as Unix Timestamp */
        playername: string,
        /** Lowercase minecraft username */
        displayname: string,
        /** Minecraft username as it displays in game */
        knownAliases: Array<string>,
        /** Array of past Minecraft usernames as they display in game */
        knownAliasesLower: Array<string>,
        /**  Array of past lowercase Minecraft usernames */
        achievementsOneTime: Array<HYPIXEL_ONE_TIME_ACHIEVEMENTS[]>,
        /** List of achievements that are only acquirable one time */
        achievements: HYPIXEL_ACHIEVEMENTS,
        /** List of achievements that are aquirable multiple times */
        achievementPoints: number,
        /** Amount of achievement points aquired */
        networkExp: number,
        /** Amount of network experience aquired */
        karma: number,
        /** Amount of karma aquired */
        channel: HYPIXEL_CHANNEL_TYPE,
        /** Current channel where chats will be sent */
        stats: {
            SkyWars: Object,
            Arcade: Object,
            TrueCombat: Object,
            Battleground: Object,
            HungerGames: Object,
            TNTGames: Object,
            GingerBread: Object,
            SuperSmash: Object,
            UHC: Object,
            Walls: Object,
            Paintball: Object,
            VampireZ: Object,
            MCGO: Object,
            Arena: Object,
            Quake: Object,
            Walls3: Object,
            SpeedUHC: Object,
            SkyClash: Object,
            Legacy: Object,
            Bedwars: Object,
            MurderMystery: Object,
            Duels: Object,
            BuildBattle: Object,
            Pit: Object,
            Housing: Object,
            SkyBlock: Object,
        },
        /** All game stats object */
        petConsumables: {
            "MUSHROOM_SOUP": number,
            "CARROT_ITEM": number,
            "FEATHER": number,
            "ROTTEN_FLESH": number,
            "SLIME_BALL": number,
            "RED_ROSE": number,
            "CAKE": number,
            "WATER_BUCKET": number,
            "WOOD_SWORD": number,
            "MELON": number,
            "MILK_BUCKET": number,
            "GOLD_RECORD": number,
            "LEASH": number,
            "LAVA_BUCKET": number,
            "BAKED_POTATO": number,
            "COOKIE": number,
            "BREAD": number,
            "STICK": number,
            "PORK": number,
            "MAGMA_CREAM": number,
            "HAY_BLOCK": number,
            "RAW_FISH": number,
            "APPLE": number,
            "COOKED_BEEF": number,
            "WHEAT": number,
            "PUMPKIN_PIE": number,
            "BONE": number,
        },
        /** Amounts of pet consumables */
        vanityMeta: {
            packages: Array<string>
        },
        /** */
        housingMeta: {},
        /** */
        eugene: {
            dailyTwoKExp: number,
        },
        /** */
        quests: {},
        /** */
        questSettings: {
            autoActivate: boolean,
        },
        /** */
        friendRequestsUuid: Array<string>,
        /** List of active friend request UUIDs */
        rewardConsumed: boolean,
        /** */
        lastAdsenseGenerateTime: number,
        /** */
        lastClaimedReward: number,
        /** */
        totalRewards: number,
        /** */
        totalDailyRewards: number,
        /** */
        rewardStreak: number,
        /** Current streak of claiming rewards */
        rewardScore: number,
        /** */
        rewardHighScore: number,
        /** */
        voting: {
            total: number,
            total_topg: number,
            secondary_topg: number,
            last_topg: number,
            /** Last time voted as Unix timestamp */
            votesToday: number,
            secondary_mcsl: number,
            total_mcsl: number,
            last_mcsl: number,
            /** Last time voted as Unix timestamp */
            last_vote: number,
            /** Last time voted as Unix timestamp */
            total_mcsorg: number,
            secondary_mcsorg: number,
            last_mcsorg: number,
            /** Last time voted as Unix timestamp */
            total_mcmp: number,
            secondary_mcmp: number,
            last_mcmp: number,
            /** Last time voted as Unix timestamp */
            total_mcf: number,
            secondary_mcf: number,
            last_mcf: number,
            /** Last time voted as Unix timestamp */
        },
        /** */
        adsense_tokens: number,
        /** */
        petStats: {},
        /** */
        flashingSalePopup: number,
        /** Unix timestamp */
        flashingSalePoppedUp: number,
        /** */
        flashingSaleOpens: number,
        /** */
        flashingSaleClicks: number,
        /** */
        newPackageRank: HYPIXEL_RANK,
        /** */
        rankPlusColor: string[HYPIXEL_PLUS_COLOR],
        /** */
        levelUp_MVP: number,
        /** Unix timestamp */
        levelUp_MVP_PLUS: number,
        /** Unix timestamp */
        specialtyCooldowns: {
            VIP0: boolean,
            VIP1: boolean,
            VIP2: boolean,
            VIP3: boolean,
            VIP4: boolean,
            VIP5: boolean,
            VIP6: boolean,
            VIP_PLUS0: boolean,
            VIP_PLUS1: boolean,
            VIP_PLUS2: boolean,
            VIP_PLUS3: boolean,
            VIP_PLUS4: boolean,
            VIP_PLUS5: boolean,
            VIP_PLUS6: boolean,
            MVP0: boolean,
            MVP1: boolean,
            MVP2: boolean,
            MVP3: boolean,
            MVP4: boolean,
            MVP5: boolean,
            MVP6: boolean,
        },
        /** */
        petJourneyTimestamp: number,
        /** Unix timestamp */
        currentGadget: string,
        /** Current activated gadget */
        disabledProjectileTrails: boolean,
        /** If they have projectiles disabled */
        currentCloak: string,
        /** Current activated cloak */
        currentPet: string,
        /** Current activated pet */
        outfits: {
            HELMET: string,
            CHESTPLATE: string,
            LEGGINGS: string,
            BOOTS: string,
        },
        /** Selected lobby outfits */
    }
}

export let DuelModes = [
    {id: 'uhc_duel', divisionId: 'uhc', name: 'UHC 1v1'},
    {id: 'uhc_doubles', divisionId: 'uhc', name: 'UHC 2v2'},
    {id: 'uhc_four', divisionId: 'uhc', name: 'UHC 4v4'},
    {id: 'uhc_meetup', divisionId: 'uhc', name: 'UHC Deathmatch'},
    {id: 'op_duel', divisionId: 'op',name: 'OP 1v1'},
    {id: 'op_doubles', divisionId: 'op', name: 'OP 2v2'},
    {id: 'sw_duel', divisionId: 'skywars', name: 'SkyWars 1v1'},
    {id: 'sw_doubles', divisionId: 'skywars', name: 'SkyWars 2v2'},
    {id: 'bow_duel', divisionId: 'bow', name: 'Bow 1v1'},
    {id: 'blitz_duel', divisionId: 'blitz', name: 'Blitz 1v1'},
    {id: 'mw_duel', divisionId: 'mega_walls', name: 'MegaWalls'},
    {id: 'sumo_duel', divisionId: 'sumo', name: 'Sumo 1v1'},
    {id: 'bowspleef_duel', divisionId: 'tnt_games', name: 'Bow Spleef 1v1'},
    {id: 'parkour_eight', divisionId: 'parkour', name: 'Parkour FFA'},
    {id: 'boxing_duel', divisionId: 'boxing', name: 'Boxing 1v1'},
    {id: 'classic_duel', divisionId: 'classic', name: 'Classic 1v1'},
    {id: 'potion_duel', divisionId: 'no_debuff', name: 'NoDebuff 1v1'},
    {id: 'combo_duel', divisionId: 'combo', name: 'Combo 1v1'},
    {id: 'bridge_duel', divisionId: 'bridge', name: 'Bridge 1v1'},
    {id: 'bridge_doubles', divisionId: 'bridge', name: 'Bridge 2v2'},
    {id: 'bridge_threes', divisionId: 'bridge', name: 'Bridge 3v3'},
    {id: 'bridge_four', divisionId: 'bridge', name: 'Bridge 4v4'},
    {id: 'bridge_2v2v2v2', divisionId: 'bridge', name: 'Bridge 2v2v2v2'},
    {id: 'bridge_3v3v3v3', divisionId: 'bridge', name: 'Bridge 3v3v3v3'},
    {id: 'capture_threes', divisionId: 'bridge', name: 'Bridge CTF 3v3'},
]