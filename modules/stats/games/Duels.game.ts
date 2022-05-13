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

    // UHC Meetup
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

    // Blitz 1v1
    blitz_duel_kills = 0,
    blitz_duel_deaths = 0,
    blitz_duel_wins = 0,
    blitz_duel_losses = 0,
    blitz_duel_melee_swings = 0,
    blitz_duel_melee_hits = 0,
    blitz_duel_bow_hits = 0,
    blitz_duel_bow_shots = 0,
    current_winstreak_mode_blitz_duel = 0,
    best_winstreak_mode_blitz_duel = 0,

    // MegaWalls
    mw_duel_kills = 0,
    mw_duel_deaths = 0,
    mw_duel_wins = 0,
    mw_duel_losses = 0,
    mw_duel_melee_swings = 0,
    mw_duel_melee_hits = 0,
    mw_duel_bow_hits = 0,
    mw_duel_bow_shots = 0,
    current_winstreak_mode_mw_duel = 0,
    best_winstreak_mode_mw_duel = 0,

    // Sumo 1v1
    sumo_duel_kills = 0,
    sumo_duel_deaths = 0,
    sumo_duel_wins = 0,
    sumo_duel_losses = 0,
    sumo_duel_melee_swings = 0,
    sumo_duel_melee_hits = 0,
    sumo_duel_bow_hits = 0,
    sumo_duel_bow_shots = 0,
    current_winstreak_mode_sumo_duel = 0,
    best_winstreak_mode_sumo_duel = 0,

    // Bowspleef 1v1
    bowspleef_duel_kills = 0,
    bowspleef_duel_deaths = 0,
    bowspleef_duel_wins = 0,
    bowspleef_duel_losses = 0,
    bowspleef_duel_melee_swings = 0,
    bowspleef_duel_melee_hits = 0,
    bowspleef_duel_bow_hits = 0,
    bowspleef_duel_bow_shots = 0,
    current_winstreak_mode_bowspleef_duel = 0,
    best_winstreak_mode_bowspleef_duel = 0,

    // Classic 1v1
    classic_duel_kills = 0,
    classic_duel_deaths = 0,
    classic_duel_wins = 0,
    classic_duel_losses = 0,
    classic_duel_melee_swings = 0,
    classic_duel_melee_hits = 0,
    classic_duel_bow_hits = 0,
    classic_duel_bow_shots = 0,
    current_winstreak_mode_classic_duel = 0,
    best_winstreak_mode_classic_duel = 0,

    // Potion 1v1
    potion_duel_kills = 0,
    potion_duel_deaths = 0,
    potion_duel_wins = 0,
    potion_duel_losses = 0,
    potion_duel_melee_swings = 0,
    potion_duel_melee_hits = 0,
    potion_duel_bow_hits = 0,
    potion_duel_bow_shots = 0,
    current_winstreak_mode_potion_duel = 0,
    best_winstreak_mode_potion_duel = 0,

    // Combo 1v1
    combo_duel_kills = 0,
    combo_duel_deaths = 0,
    combo_duel_wins = 0,
    combo_duel_losses = 0,
    combo_duel_melee_swings = 0,
    combo_duel_melee_hits = 0,
    combo_duel_bow_hits = 0,
    combo_duel_bow_shots = 0,
    current_winstreak_mode_combo_duel = 0,
    best_winstreak_mode_combo_duel = 0,

    // Bridge 1v1
    bridge_duel_kills = 0,
    bridge_duel_deaths = 0,
    bridge_duel_bridge_kills = 0,
    bridge_duel_bridge_deaths = 0,
    bridge_duel_wins = 0,
    bridge_duel_losses = 0,
    bridge_duel_goals = 0,
    bridge_duel_melee_swings = 0,
    bridge_duel_melee_hits = 0,
    bridge_duel_bow_hits = 0,
    bridge_duel_bow_shots = 0,
    current_winstreak_mode_bridge_duel = 0,
    best_winstreak_mode_bridge_duel = 0,

    // Bridge 2v2
    bridge_doubles_kills = 0,
    bridge_doubles_deaths = 0,
    bridge_doubles_bridge_kills = 0,
    bridge_doubles_bridge_deaths = 0,
    bridge_doubles_wins = 0,
    bridge_doubles_losses = 0,
    bridge_doubles_goals = 0,
    bridge_doubles_melee_swings = 0,
    bridge_doubles_melee_hits = 0,
    bridge_doubles_bow_hits = 0,
    bridge_doubles_bow_shots = 0,
    current_winstreak_mode_bridge_doubles = 0,
    best_winstreak_mode_bridge_doubles = 0,

    // Bridge 3v3
    bridge_threes_kills = 0,
    bridge_threes_deaths = 0,
    bridge_threes_bridge_kills = 0,
    bridge_threes_bridge_deaths = 0,
    bridge_threes_wins = 0,
    bridge_threes_losses = 0,
    bridge_threes_goals = 0,
    bridge_threes_melee_swings = 0,
    bridge_threes_melee_hits = 0,
    bridge_threes_bow_hits = 0,
    bridge_threes_bow_shots = 0,
    current_winstreak_mode_bridge_threes = 0,
    best_winstreak_mode_bridge_threes = 0,

    // Bridge 4v4
    bridge_four_kills = 0,
    bridge_four_deaths = 0,
    bridge_four_bridge_kills = 0,
    bridge_four_bridge_deaths = 0,
    bridge_four_wins = 0,
    bridge_four_losses = 0,
    bridge_four_goals = 0,
    bridge_four_melee_swings = 0,
    bridge_four_melee_hits = 0,
    bridge_four_bow_hits = 0,
    bridge_four_bow_shots = 0,
    current_winstreak_mode_bridge_four = 0,
    best_winstreak_mode_bridge_four = 0,

    // Bridge 2v2v2v2
    bridge_2v2v2v2_kills = 0,
    bridge_2v2v2v2_deaths = 0,
    bridge_2v2v2v2_bridge_kills = 0,
    bridge_2v2v2v2_bridge_deaths = 0,
    bridge_2v2v2v2_wins = 0,
    bridge_2v2v2v2_losses = 0,
    bridge_2v2v2v2_goals = 0,
    bridge_2v2v2v2_melee_swings = 0,
    bridge_2v2v2v2_melee_hits = 0,
    bridge_2v2v2v2_bow_hits = 0,
    bridge_2v2v2v2_bow_shots = 0,
    current_winstreak_mode_bridge_2v2v2v2 = 0,
    best_winstreak_mode_bridge_2v2v2v2 = 0,

    // Bridge 3v3v3v3
    bridge_3v3v3v3_kills = 0,
    bridge_3v3v3v3_deaths = 0,
    bridge_3v3v3v3_bridge_kills = 0,
    bridge_3v3v3v3_bridge_deaths = 0,
    bridge_3v3v3v3_wins = 0,
    bridge_3v3v3v3_losses = 0,
    bridge_3v3v3v3_goals = 0,
    bridge_3v3v3v3_melee_swings = 0,
    bridge_3v3v3v3_melee_hits = 0,
    bridge_3v3v3v3_bow_hits = 0,
    bridge_3v3v3v3_bow_shots = 0,
    current_winstreak_mode_bridge_3v3v3v3 = 0,
    best_winstreak_mode_bridge_3v3v3v3 = 0,

    // Bridge CTF
    capture_threes_kills = 0,
    capture_threes_deaths = 0,
    capture_threes_bridge_kills = 0,
    capture_threes_bridge_deaths = 0,
    capture_threes_wins = 0,
    capture_threes_losses = 0,
    capture_threes_goals = 0,
    capture_threes_melee_swings = 0,
    capture_threes_melee_hits = 0,
    capture_threes_bow_hits = 0,
    capture_threes_bow_shots = 0,
    current_winstreak_mode_capture_threes = 0,
    best_winstreak_mode_capture_threes = 0,
}): HydratedDocument<IHypixel> => {

    // someone please optimize this im too dumb with typescript !!!!!!!!!!!!!!!! HELPPPP !!!!!!!!!!

    // GAME STATS
    model.stats.Duels.coins = handleSection(model.stats.Duels.coins, coins);
    model.stats.Duels.lootChests = duels_chests;
    model.stats.Duels.wins = handleSection(model.stats.Duels.wins, wins);
    model.stats.Duels.losses = handleSection(model.stats.Duels.losses, losses);
    model.stats.Duels.kills = handleSection(model.stats.Duels.kills, kills);
    model.stats.Duels.deaths = handleSection(model.stats.Duels.deaths, deaths);
    model.stats.Duels.swings = handleSection(model.stats.Duels.swings, melee_swings);
    model.stats.Duels.hits = handleSection(model.stats.Duels.hits, melee_hits);
    model.stats.Duels.arrowsShot = handleSection(model.stats.Duels.arrowsShot, bow_shots);
    model.stats.Duels.arrowsHit = handleSection(model.stats.Duels.arrowsHit, bow_hits);
    model.stats.Duels.winstreaks.current = handleSection(model.stats.Duels.winstreaks.current, current_winstreak);
    model.stats.Duels.winstreaks.best = handleSection(model.stats.Duels.winstreaks.best, best_overall_winstreak);

    // UHC 1v1
    model.stats.Duels.modes.uhc_duel.kills = handleSection(model.stats.Duels.modes.uhc_duel.kills, uhc_duel_kills);
    model.stats.Duels.modes.uhc_duel.deaths = handleSection(model.stats.Duels.modes.uhc_duel.deaths, uhc_duel_deaths);
    model.stats.Duels.modes.uhc_duel.wins = handleSection(model.stats.Duels.modes.uhc_duel.wins, uhc_duel_wins);
    model.stats.Duels.modes.uhc_duel.losses = handleSection(model.stats.Duels.modes.uhc_duel.losses, uhc_duel_losses);
    model.stats.Duels.modes.uhc_duel.winstreaks.best = handleSection(model.stats.Duels.modes.uhc_duel.winstreaks.best, best_uhc_winstreak);
    model.stats.Duels.modes.uhc_duel.winstreaks.current = handleSection(model.stats.Duels.modes.uhc_duel.winstreaks.current, current_uhc_winstreak);
    model.stats.Duels.modes.uhc_duel.swings = handleSection(model.stats.Duels.modes.uhc_duel.swings, uhc_duel_melee_swings);
    model.stats.Duels.modes.uhc_duel.hits = handleSection(model.stats.Duels.modes.uhc_duel.hits, uhc_duel_melee_hits);
    model.stats.Duels.modes.uhc_duel.arrowsShot = handleSection(model.stats.Duels.modes.uhc_duel.arrowsShot, uhc_duel_bow_shots);
    model.stats.Duels.modes.uhc_duel.arrowsHit = handleSection(model.stats.Duels.modes.uhc_duel.arrowsHit, uhc_duel_bow_hits);

    // UHC 2v2
    model.stats.Duels.modes.uhc_doubles.kills = handleSection(model.stats.Duels.modes.uhc_doubles.kills, uhc_doubles_kills);
    model.stats.Duels.modes.uhc_doubles.deaths = handleSection(model.stats.Duels.modes.uhc_doubles.deaths, uhc_doubles_deaths);
    model.stats.Duels.modes.uhc_doubles.wins = handleSection(model.stats.Duels.modes.uhc_doubles.wins, uhc_doubles_wins);
    model.stats.Duels.modes.uhc_doubles.losses = handleSection(model.stats.Duels.modes.uhc_doubles.losses, uhc_doubles_losses);
    model.stats.Duels.modes.uhc_doubles.winstreaks.best = handleSection(model.stats.Duels.modes.uhc_doubles.winstreaks.best, best_uhc_winstreak);
    model.stats.Duels.modes.uhc_doubles.winstreaks.current = handleSection(model.stats.Duels.modes.uhc_doubles.winstreaks.current, current_uhc_winstreak);
    model.stats.Duels.modes.uhc_doubles.swings = handleSection(model.stats.Duels.modes.uhc_doubles.swings, uhc_doubles_melee_swings);
    model.stats.Duels.modes.uhc_doubles.hits = handleSection(model.stats.Duels.modes.uhc_doubles.hits, uhc_doubles_melee_hits);
    model.stats.Duels.modes.uhc_doubles.arrowsShot = handleSection(model.stats.Duels.modes.uhc_doubles.arrowsShot, uhc_doubles_bow_shots);
    model.stats.Duels.modes.uhc_doubles.arrowsHit = handleSection(model.stats.Duels.modes.uhc_doubles.arrowsHit, uhc_doubles_bow_hits);

    // UHC 4v4
    model.stats.Duels.modes.uhc_four.kills = handleSection(model.stats.Duels.modes.uhc_four.kills, uhc_four_kills);
    model.stats.Duels.modes.uhc_four.deaths = handleSection(model.stats.Duels.modes.uhc_four.deaths, uhc_four_deaths);
    model.stats.Duels.modes.uhc_four.wins = handleSection(model.stats.Duels.modes.uhc_four.wins, uhc_four_wins);
    model.stats.Duels.modes.uhc_four.losses = handleSection(model.stats.Duels.modes.uhc_four.losses, uhc_four_losses);
    model.stats.Duels.modes.uhc_four.winstreaks.best = handleSection(model.stats.Duels.modes.uhc_four.winstreaks.best, best_uhc_winstreak);
    model.stats.Duels.modes.uhc_four.winstreaks.current = handleSection(model.stats.Duels.modes.uhc_four.winstreaks.current, current_uhc_winstreak);
    model.stats.Duels.modes.uhc_four.swings = handleSection(model.stats.Duels.modes.uhc_four.swings, uhc_four_melee_swings);
    model.stats.Duels.modes.uhc_four.hits = handleSection(model.stats.Duels.modes.uhc_four.hits, uhc_four_melee_hits);
    model.stats.Duels.modes.uhc_four.arrowsShot = handleSection(model.stats.Duels.modes.uhc_four.arrowsShot, uhc_four_bow_shots);
    model.stats.Duels.modes.uhc_four.arrowsHit = handleSection(model.stats.Duels.modes.uhc_four.arrowsHit, uhc_four_bow_hits);

    // UHC Meetup
    model.stats.Duels.modes.uhc_meetup.kills = handleSection(model.stats.Duels.modes.uhc_meetup.kills, uhc_meetup_kills);
    model.stats.Duels.modes.uhc_meetup.deaths = handleSection(model.stats.Duels.modes.uhc_meetup.deaths, uhc_meetup_deaths);
    model.stats.Duels.modes.uhc_meetup.wins = handleSection(model.stats.Duels.modes.uhc_meetup.wins, uhc_meetup_wins);
    model.stats.Duels.modes.uhc_meetup.losses = handleSection(model.stats.Duels.modes.uhc_meetup.losses, uhc_meetup_losses);
    model.stats.Duels.modes.uhc_meetup.winstreaks.best = handleSection(model.stats.Duels.modes.uhc_meetup.winstreaks.best, best_uhc_winstreak);
    model.stats.Duels.modes.uhc_meetup.winstreaks.current = handleSection(model.stats.Duels.modes.uhc_meetup.winstreaks.current, current_uhc_winstreak);
    model.stats.Duels.modes.uhc_meetup.swings = handleSection(model.stats.Duels.modes.uhc_meetup.swings, uhc_meetup_melee_swings);
    model.stats.Duels.modes.uhc_meetup.hits = handleSection(model.stats.Duels.modes.uhc_meetup.hits, uhc_meetup_melee_hits);
    model.stats.Duels.modes.uhc_meetup.arrowsShot = handleSection(model.stats.Duels.modes.uhc_meetup.arrowsShot, uhc_meetup_bow_hits);
    model.stats.Duels.modes.uhc_meetup.arrowsHit = handleSection(model.stats.Duels.modes.uhc_meetup.arrowsHit, uhc_meetup_bow_shots);

    // OP 1v1
    model.stats.Duels.modes.op_duel.kills = handleSection(model.stats.Duels.modes.op_duel.kills, op_duel_kills);
    model.stats.Duels.modes.op_duel.deaths = handleSection(model.stats.Duels.modes.op_duel.deaths, op_duel_deaths);
    model.stats.Duels.modes.op_duel.wins = handleSection(model.stats.Duels.modes.op_duel.wins, op_duel_wins);
    model.stats.Duels.modes.op_duel.losses = handleSection(model.stats.Duels.modes.op_duel.losses, op_duel_losses);
    model.stats.Duels.modes.op_duel.winstreaks.best = handleSection(model.stats.Duels.modes.op_duel.winstreaks.best, best_winstreak_mode_op_duel);
    model.stats.Duels.modes.op_duel.winstreaks.current = handleSection(model.stats.Duels.modes.op_duel.winstreaks.current, current_winstreak_mode_op_duel);
    model.stats.Duels.modes.op_duel.swings = handleSection(model.stats.Duels.modes.op_duel.swings, op_duel_melee_swings);
    model.stats.Duels.modes.op_duel.hits = handleSection(model.stats.Duels.modes.op_duel.hits, op_duel_melee_hits);
    model.stats.Duels.modes.op_duel.arrowsShot = handleSection(model.stats.Duels.modes.op_duel.arrowsShot, op_duel_bow_shots);
    model.stats.Duels.modes.op_duel.arrowsHit = handleSection(model.stats.Duels.modes.op_duel.arrowsHit, op_duel_bow_hits);

    // OP 2v2
    model.stats.Duels.modes.op_doubles.kills = handleSection(model.stats.Duels.modes.op_doubles.kills, op_doubles_kills);
    model.stats.Duels.modes.op_doubles.deaths = handleSection(model.stats.Duels.modes.op_doubles.deaths, op_doubles_deaths);
    model.stats.Duels.modes.op_doubles.wins = handleSection(model.stats.Duels.modes.op_doubles.wins, op_doubles_wins);
    model.stats.Duels.modes.op_doubles.losses = handleSection(model.stats.Duels.modes.op_doubles.losses, op_doubles_losses);
    model.stats.Duels.modes.op_doubles.winstreaks.best = handleSection(model.stats.Duels.modes.op_doubles.winstreaks.best, best_winstreak_mode_op_duel);
    model.stats.Duels.modes.op_doubles.winstreaks.current = handleSection(model.stats.Duels.modes.op_doubles.winstreaks.current, current_winstreak_mode_op_duel);
    model.stats.Duels.modes.op_doubles.swings = handleSection(model.stats.Duels.modes.op_doubles.swings, op_doubles_melee_swings);
    model.stats.Duels.modes.op_doubles.hits = handleSection(model.stats.Duels.modes.op_doubles.hits, op_doubles_melee_hits);
    model.stats.Duels.modes.op_doubles.arrowsShot = handleSection(model.stats.Duels.modes.op_doubles.arrowsShot, op_doubles_bow_shots);
    model.stats.Duels.modes.op_doubles.arrowsHit = handleSection(model.stats.Duels.modes.op_doubles.arrowsHit, op_doubles_bow_hits);

    // SW 1v1
    model.stats.Duels.modes.sw_duel.kills = handleSection(model.stats.Duels.modes.sw_duel.kills, sw_duel_kills);
    model.stats.Duels.modes.sw_duel.deaths = handleSection(model.stats.Duels.modes.sw_duel.deaths, sw_duel_deaths);
    model.stats.Duels.modes.sw_duel.wins = handleSection(model.stats.Duels.modes.sw_duel.wins, sw_duel_wins);
    model.stats.Duels.modes.sw_duel.losses = handleSection(model.stats.Duels.modes.sw_duel.losses, sw_duel_losses);
    model.stats.Duels.modes.sw_duel.winstreaks.best = handleSection(model.stats.Duels.modes.sw_duel.winstreaks.best, best_winstreak_mode_sw_duel);
    model.stats.Duels.modes.sw_duel.winstreaks.current = handleSection(model.stats.Duels.modes.sw_duel.winstreaks.current, current_winstreak_mode_sw_duel);
    model.stats.Duels.modes.sw_duel.swings = handleSection(model.stats.Duels.modes.sw_duel.swings, sw_duel_melee_swings);
    model.stats.Duels.modes.sw_duel.hits = handleSection(model.stats.Duels.modes.sw_duel.hits, sw_duel_melee_hits);
    model.stats.Duels.modes.sw_duel.arrowsShot = handleSection(model.stats.Duels.modes.sw_duel.arrowsShot, sw_duel_bow_shots);
    model.stats.Duels.modes.sw_duel.arrowsHit = handleSection(model.stats.Duels.modes.sw_duel.arrowsHit, sw_duel_bow_hits);

    // SW 2v2
    model.stats.Duels.modes.sw_doubles.kills = handleSection(model.stats.Duels.modes.sw_doubles.kills, sw_doubles_kills);
    model.stats.Duels.modes.sw_doubles.deaths = handleSection(model.stats.Duels.modes.sw_doubles.deaths, sw_doubles_deaths);
    model.stats.Duels.modes.sw_doubles.wins = handleSection(model.stats.Duels.modes.sw_doubles.wins, sw_doubles_wins);
    model.stats.Duels.modes.sw_doubles.losses = handleSection(model.stats.Duels.modes.sw_doubles.losses, sw_doubles_losses);
    model.stats.Duels.modes.sw_doubles.winstreaks.best = handleSection(model.stats.Duels.modes.sw_doubles.winstreaks.best, best_winstreak_mode_sw_duel);
    model.stats.Duels.modes.sw_doubles.winstreaks.current = handleSection(model.stats.Duels.modes.sw_doubles.winstreaks.current, current_winstreak_mode_sw_duel);
    model.stats.Duels.modes.sw_doubles.swings = handleSection(model.stats.Duels.modes.sw_doubles.swings, sw_doubles_melee_swings);
    model.stats.Duels.modes.sw_doubles.hits = handleSection(model.stats.Duels.modes.sw_doubles.hits, sw_doubles_melee_hits);
    model.stats.Duels.modes.sw_doubles.arrowsShot = handleSection(model.stats.Duels.modes.sw_doubles.arrowsShot, sw_doubles_bow_shots);
    model.stats.Duels.modes.sw_doubles.arrowsHit = handleSection(model.stats.Duels.modes.sw_doubles.arrowsHit, sw_doubles_bow_hits);

    // Bow 1v1
    model.stats.Duels.modes.bow_duel.kills = handleSection(model.stats.Duels.modes.bow_duel.kills, bow_duel_kills);
    model.stats.Duels.modes.bow_duel.deaths = handleSection(model.stats.Duels.modes.bow_duel.deaths, bow_duel_deaths);
    model.stats.Duels.modes.bow_duel.wins = handleSection(model.stats.Duels.modes.bow_duel.wins, bow_duel_wins);
    model.stats.Duels.modes.bow_duel.losses = handleSection(model.stats.Duels.modes.bow_duel.losses, bow_duel_losses);
    model.stats.Duels.modes.bow_duel.winstreaks.best = handleSection(model.stats.Duels.modes.bow_duel.winstreaks.best, best_winstreak_mode_bow_duel);
    model.stats.Duels.modes.bow_duel.winstreaks.current = handleSection(model.stats.Duels.modes.bow_duel.winstreaks.current, current_winstreak_mode_bow_duel);
    model.stats.Duels.modes.bow_duel.swings = handleSection(model.stats.Duels.modes.bow_duel.swings, bow_duel_melee_swings);
    model.stats.Duels.modes.bow_duel.hits = handleSection(model.stats.Duels.modes.bow_duel.hits, bow_duel_melee_hits);
    model.stats.Duels.modes.bow_duel.arrowsShot = handleSection(model.stats.Duels.modes.bow_duel.arrowsShot, bow_duel_bow_shots);
    model.stats.Duels.modes.bow_duel.arrowsHit = handleSection(model.stats.Duels.modes.bow_duel.arrowsHit, bow_duel_bow_hits);

    // Blitz 1v1
    model.stats.Duels.modes.blitz_duel.kills = handleSection(model.stats.Duels.modes.blitz_duel.kills, blitz_duel_kills);
    model.stats.Duels.modes.blitz_duel.deaths = handleSection(model.stats.Duels.modes.blitz_duel.deaths, blitz_duel_deaths);
    model.stats.Duels.modes.blitz_duel.wins = handleSection(model.stats.Duels.modes.blitz_duel.wins, blitz_duel_wins);
    model.stats.Duels.modes.blitz_duel.losses = handleSection(model.stats.Duels.modes.blitz_duel.losses, blitz_duel_losses);
    model.stats.Duels.modes.blitz_duel.winstreaks.best = handleSection(model.stats.Duels.modes.blitz_duel.winstreaks.best, best_winstreak_mode_blitz_duel);
    model.stats.Duels.modes.blitz_duel.winstreaks.current = handleSection(model.stats.Duels.modes.blitz_duel.winstreaks.current, current_winstreak_mode_blitz_duel);
    model.stats.Duels.modes.blitz_duel.swings = handleSection(model.stats.Duels.modes.blitz_duel.swings, blitz_duel_melee_swings);
    model.stats.Duels.modes.blitz_duel.hits = handleSection(model.stats.Duels.modes.blitz_duel.hits, blitz_duel_melee_hits);
    model.stats.Duels.modes.blitz_duel.arrowsShot = handleSection(model.stats.Duels.modes.blitz_duel.arrowsShot, blitz_duel_bow_shots);
    model.stats.Duels.modes.blitz_duel.arrowsHit = handleSection(model.stats.Duels.modes.blitz_duel.arrowsHit, blitz_duel_bow_hits);

    // MegaWalls
    model.stats.Duels.modes.mw_duel.kills = handleSection(model.stats.Duels.modes.mw_duel.kills, mw_duel_kills);
    model.stats.Duels.modes.mw_duel.deaths = handleSection(model.stats.Duels.modes.mw_duel.deaths, mw_duel_deaths);
    model.stats.Duels.modes.mw_duel.wins = handleSection(model.stats.Duels.modes.mw_duel.wins, mw_duel_wins);
    model.stats.Duels.modes.mw_duel.losses = handleSection(model.stats.Duels.modes.mw_duel.losses, mw_duel_losses);
    model.stats.Duels.modes.mw_duel.winstreaks.best = handleSection(model.stats.Duels.modes.mw_duel.winstreaks.best, best_winstreak_mode_mw_duel);
    model.stats.Duels.modes.mw_duel.winstreaks.current = handleSection(model.stats.Duels.modes.mw_duel.winstreaks.current, current_winstreak_mode_mw_duel);
    model.stats.Duels.modes.mw_duel.swings = handleSection(model.stats.Duels.modes.mw_duel.swings, mw_duel_melee_swings);
    model.stats.Duels.modes.mw_duel.hits = handleSection(model.stats.Duels.modes.mw_duel.hits, mw_duel_melee_hits);
    model.stats.Duels.modes.mw_duel.arrowsShot = handleSection(model.stats.Duels.modes.mw_duel.arrowsShot, mw_duel_bow_shots);
    model.stats.Duels.modes.mw_duel.arrowsHit = handleSection(model.stats.Duels.modes.mw_duel.arrowsHit, mw_duel_bow_hits);

    // Sumo 1v1
    model.stats.Duels.modes.sumo_duel.kills = handleSection(model.stats.Duels.modes.sumo_duel.kills, sumo_duel_kills);
    model.stats.Duels.modes.sumo_duel.deaths = handleSection(model.stats.Duels.modes.sumo_duel.deaths, sumo_duel_deaths);
    model.stats.Duels.modes.sumo_duel.wins = handleSection(model.stats.Duels.modes.sumo_duel.wins, sumo_duel_wins);
    model.stats.Duels.modes.sumo_duel.losses = handleSection(model.stats.Duels.modes.sumo_duel.losses, sumo_duel_losses);
    model.stats.Duels.modes.sumo_duel.winstreaks.best = handleSection(model.stats.Duels.modes.sumo_duel.winstreaks.best, best_winstreak_mode_sumo_duel);
    model.stats.Duels.modes.sumo_duel.winstreaks.current = handleSection(model.stats.Duels.modes.sumo_duel.winstreaks.current, current_winstreak_mode_sumo_duel);
    model.stats.Duels.modes.sumo_duel.swings = handleSection(model.stats.Duels.modes.sumo_duel.swings, sumo_duel_melee_swings);
    model.stats.Duels.modes.sumo_duel.hits = handleSection(model.stats.Duels.modes.sumo_duel.hits, sumo_duel_melee_hits);
    model.stats.Duels.modes.sumo_duel.arrowsShot = handleSection(model.stats.Duels.modes.sumo_duel.arrowsShot, sumo_duel_bow_shots);
    model.stats.Duels.modes.sumo_duel.arrowsHit = handleSection(model.stats.Duels.modes.sumo_duel.arrowsHit, sumo_duel_bow_hits);

    // Bowspleef 1v1
    model.stats.Duels.modes.bowspleef_duel.kills = handleSection(model.stats.Duels.modes.bowspleef_duel.kills, bowspleef_duel_kills);
    model.stats.Duels.modes.bowspleef_duel.deaths = handleSection(model.stats.Duels.modes.bowspleef_duel.deaths, bowspleef_duel_deaths);
    model.stats.Duels.modes.bowspleef_duel.wins = handleSection(model.stats.Duels.modes.bowspleef_duel.wins, bowspleef_duel_wins);
    model.stats.Duels.modes.bowspleef_duel.losses = handleSection(model.stats.Duels.modes.bowspleef_duel.losses, bowspleef_duel_losses);
    model.stats.Duels.modes.bowspleef_duel.winstreaks.best = handleSection(model.stats.Duels.modes.bowspleef_duel.winstreaks.best, best_winstreak_mode_bowspleef_duel);
    model.stats.Duels.modes.bowspleef_duel.winstreaks.current = handleSection(model.stats.Duels.modes.bowspleef_duel.winstreaks.current, current_winstreak_mode_bowspleef_duel);
    model.stats.Duels.modes.bowspleef_duel.swings = handleSection(model.stats.Duels.modes.bowspleef_duel.swings, bowspleef_duel_melee_swings);
    model.stats.Duels.modes.bowspleef_duel.hits = handleSection(model.stats.Duels.modes.bowspleef_duel.hits, bowspleef_duel_melee_hits);
    model.stats.Duels.modes.bowspleef_duel.arrowsShot = handleSection(model.stats.Duels.modes.bowspleef_duel.arrowsShot, bowspleef_duel_bow_shots);
    model.stats.Duels.modes.bowspleef_duel.arrowsHit = handleSection(model.stats.Duels.modes.bowspleef_duel.arrowsHit, bowspleef_duel_bow_hits);

    // Classic 1v1
    model.stats.Duels.modes.classic_duel.kills = handleSection(model.stats.Duels.modes.classic_duel.kills, classic_duel_kills);
    model.stats.Duels.modes.classic_duel.deaths = handleSection(model.stats.Duels.modes.classic_duel.deaths, classic_duel_deaths);
    model.stats.Duels.modes.classic_duel.wins = handleSection(model.stats.Duels.modes.classic_duel.wins, classic_duel_wins);
    model.stats.Duels.modes.classic_duel.losses = handleSection(model.stats.Duels.modes.classic_duel.losses, classic_duel_losses);
    model.stats.Duels.modes.classic_duel.winstreaks.best = handleSection(model.stats.Duels.modes.classic_duel.winstreaks.best, best_winstreak_mode_classic_duel);
    model.stats.Duels.modes.classic_duel.winstreaks.current = handleSection(model.stats.Duels.modes.classic_duel.winstreaks.current, current_winstreak_mode_classic_duel);
    model.stats.Duels.modes.classic_duel.swings = handleSection(model.stats.Duels.modes.classic_duel.swings, classic_duel_melee_swings);
    model.stats.Duels.modes.classic_duel.hits = handleSection(model.stats.Duels.modes.classic_duel.hits, classic_duel_melee_hits);
    model.stats.Duels.modes.classic_duel.arrowsShot = handleSection(model.stats.Duels.modes.classic_duel.arrowsShot, classic_duel_bow_shots);
    model.stats.Duels.modes.classic_duel.arrowsHit = handleSection(model.stats.Duels.modes.classic_duel.arrowsHit, classic_duel_bow_hits);

    // Potion 1v1
    model.stats.Duels.modes.potion_duel.kills = handleSection(model.stats.Duels.modes.potion_duel.kills, potion_duel_kills);
    model.stats.Duels.modes.potion_duel.deaths = handleSection(model.stats.Duels.modes.potion_duel.deaths, potion_duel_deaths);
    model.stats.Duels.modes.potion_duel.wins = handleSection(model.stats.Duels.modes.potion_duel.wins, potion_duel_wins);
    model.stats.Duels.modes.potion_duel.losses = handleSection(model.stats.Duels.modes.potion_duel.losses, potion_duel_losses);
    model.stats.Duels.modes.potion_duel.winstreaks.best = handleSection(model.stats.Duels.modes.potion_duel.winstreaks.best, best_winstreak_mode_potion_duel);
    model.stats.Duels.modes.potion_duel.winstreaks.current = handleSection(model.stats.Duels.modes.potion_duel.winstreaks.current, current_winstreak_mode_potion_duel);
    model.stats.Duels.modes.potion_duel.swings = handleSection(model.stats.Duels.modes.potion_duel.swings, potion_duel_melee_swings);
    model.stats.Duels.modes.potion_duel.hits = handleSection(model.stats.Duels.modes.potion_duel.hits, potion_duel_melee_hits);
    model.stats.Duels.modes.potion_duel.arrowsShot = handleSection(model.stats.Duels.modes.potion_duel.arrowsShot, potion_duel_bow_shots);
    model.stats.Duels.modes.potion_duel.arrowsHit = handleSection(model.stats.Duels.modes.potion_duel.arrowsHit, potion_duel_bow_hits);

    // Combo 1v1
    model.stats.Duels.modes.combo_duel.kills = handleSection(model.stats.Duels.modes.combo_duel.kills, combo_duel_kills);
    model.stats.Duels.modes.combo_duel.deaths = handleSection(model.stats.Duels.modes.combo_duel.deaths, combo_duel_deaths);
    model.stats.Duels.modes.combo_duel.wins = handleSection(model.stats.Duels.modes.combo_duel.wins, combo_duel_wins);
    model.stats.Duels.modes.combo_duel.losses = handleSection(model.stats.Duels.modes.combo_duel.losses, combo_duel_losses);
    model.stats.Duels.modes.combo_duel.winstreaks.best = handleSection(model.stats.Duels.modes.combo_duel.winstreaks.best, best_winstreak_mode_combo_duel);
    model.stats.Duels.modes.combo_duel.winstreaks.current = handleSection(model.stats.Duels.modes.combo_duel.winstreaks.current, current_winstreak_mode_combo_duel);
    model.stats.Duels.modes.combo_duel.swings = handleSection(model.stats.Duels.modes.combo_duel.swings, combo_duel_melee_swings);
    model.stats.Duels.modes.combo_duel.hits = handleSection(model.stats.Duels.modes.combo_duel.hits, combo_duel_melee_hits);
    model.stats.Duels.modes.combo_duel.arrowsShot = handleSection(model.stats.Duels.modes.combo_duel.arrowsShot, combo_duel_bow_shots);
    model.stats.Duels.modes.combo_duel.arrowsHit = handleSection(model.stats.Duels.modes.combo_duel.arrowsHit, combo_duel_bow_hits);

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