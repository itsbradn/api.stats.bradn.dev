import { HydratedDocument, IndexDefinition } from 'mongoose';
import {IHypixel, HypixelStat, HypixelSection} from '../../../models/hypixel.model';

export default (model: HydratedDocument<IHypixel>, {
    // GAME STATS
    coins = 0,
    duels_chests = 0,
    wins = 0,
    losses = 0,
    kills = 0,
    deaths = 0,
    melee_swings = 0,
    melee_hits = 0,
    bow_shots = 0,
    bow_hits = 0,
    current_winstreak = 0,
    best_overall_winstreak = 0,

    // UHC 1V1
    uhc_duel_kills = 0,
    uhc_duel_deaths = 0,
    uhc_duel_wins = 0,
    uhc_duel_losses = 0,
    current_uhc_winstreak = 0,
    best_uhc_winstreak = 0,
    uhc_duel_melee_swings = 0,
    uhc_duel_melee_hits = 0,
    uhc_duel_bow_hits = 0,
    uhc_duel_bow_shots = 0,

    // UHC 2v2
    uhc_doubles_kills = 0,
    uhc_doubles_deaths = 0,
    uhc_doubles_wins = 0,
    uhc_doubles_losses = 0,
    uhc_doubles_melee_swings = 0,
    uhc_doubles_melee_hits = 0,
    uhc_doubles_bow_hits = 0,
    uhc_doubles_bow_shots = 0,

    // UHC 4v4
    uhc_four_kills = 0,
    uhc_four_deaths = 0,
    uhc_four_wins = 0,
    uhc_four_losses = 0,
    uhc_four_melee_swings = 0,
    uhc_four_melee_hits = 0,
    uhc_four_bow_hits = 0,
    uhc_four_bow_shots = 0,

    // UHC Deathmatch
    uhc_meetup_kills = 0,
    uhc_meetup_deaths = 0,
    uhc_meetup_wins = 0,
    uhc_meetup_losses = 0,
    uhc_meetup_melee_swings = 0,
    uhc_meetup_melee_hits = 0,
    uhc_meetup_bow_hits = 0,
    uhc_meetup_bow_shots = 0,

    // OP 1v1
    op_duel_kills = 0,
    op_duel_deaths = 0,
    op_duel_wins = 0,
    op_duel_losses = 0,
    op_duel_melee_swings = 0,
    op_duel_melee_hits = 0,
    op_duel_bow_hits = 0,
    op_duel_bow_shots = 0,
    current_winstreak_mode_op_duel = 0,
    best_winstreak_mode_op_duel = 0,

    // OP 2v2
    op_doubles_kills = 0,
    op_doubles_deaths = 0,
    op_doubles_wins = 0,
    op_doubles_losses = 0,
    op_doubles_melee_swings = 0,
    op_doubles_melee_hits = 0,
    op_doubles_bow_hits = 0,
    op_doubles_bow_shots = 0,

    // SW 1v1
    sw_duel_kills = 0,
    sw_duel_deaths = 0,
    sw_duel_wins = 0,
    sw_duel_losses = 0,
    sw_duel_melee_swings = 0,
    sw_duel_melee_hits = 0,
    sw_duel_bow_hits = 0,
    sw_duel_bow_shots = 0,
    current_winstreak_mode_sw_duel = 0,
    best_winstreak_mode_sw_duel = 0,

    // SW 2v2
    sw_doubles_kills = 0,
    sw_doubles_deaths = 0,
    sw_doubles_wins = 0,
    sw_doubles_losses = 0,
    sw_doubles_melee_swings = 0,
    sw_doubles_melee_hits = 0,
    sw_doubles_bow_hits = 0,
    sw_doubles_bow_shots = 0,

    // Bow 1v1
    bow_duel_kills = 0,
    bow_duel_deaths = 0,
    bow_duel_wins = 0,
    bow_duel_losses = 0,
    bow_duel_melee_swings = 0,
    bow_duel_melee_hits = 0,
    bow_duel_bow_hits = 0,
    bow_duel_bow_shots = 0,
    current_winstreak_mode_bow_duel = 0,
    best_winstreak_mode_bow_duel = 0,

    // BowSpleef 1v1
    bow_duel_kills = 0,
    bow_duel_deaths = 0,
    bow_duel_wins = 0,
    bow_duel_losses = 0,
    bow_duel_melee_swings = 0,
    bow_duel_melee_hits = 0,
    bow_duel_bow_hits = 0,
    bow_duel_bow_shots = 0,
    current_winstreak_mode_bow_duel = 0,
    best_winstreak_mode_bow_duel = 0,
}): HydratedDocument<IHypixel> => {

    // someone please optimize this im too dumb with typescript !!!!!!!!!!!!!!!! HELPPPP !!!!!!!!!!

    // GAME STATS
    model.stats.TNTGames.coins = handleSection(model.stats.TNTGames.coins, coins);
    model.stats.TNTGames.wins = handleSection(model.stats.TNTGames.wins, wins);

    function handleArray(array: Array<HypixelStat>, val: number | string): Array<HypixelStat> {
        if (!array.some(e => e.value === val)) {
            array.push({
                value: val,
                date: new Date(),
            });
        }

        return array;
    }

    function handleSection(location: HypixelSection, value: number | string): HypixelSection {
        return {
            value: value,
            history: handleArray(location.history, value)
        }
    }

    return model;
}