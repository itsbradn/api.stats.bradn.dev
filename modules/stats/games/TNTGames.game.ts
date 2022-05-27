import { HydratedDocument, IndexDefinition } from 'mongoose';
import {IHypixel, HypixelStat, HypixelSection} from '../../../models/hypixel.model';

export default (model: IHypixel, {
    // GAME STATS
    coins = 0,
    wins = 0,

    // TNT Tag
    kills_tntag = 0,
    wins_tntag = 0,
    deaths_tntag = 0,

    // TNT Run
    deaths_tntrun = 0,
    wins_tntrun = 0,
    record_tntrun = 0,

    // PVP Run
    deaths_pvprun = 0,
    kills_pvprun = 0,
    wins_pvprun = 0,
    record_pvprun = 0,

    // Bow Spleef
    deaths_bowspleef = 0,
    wins_bowspleef = 0,
    tags_bowspleef = 0,

    // Wizards
    wins_capture = 0,
    kills_capture = 0,
    deaths_capture = 0,
    assists_capture = 0,
    capture_class = undefined,

    // Ancient Class
    new_ancientwizard_kills = 0,
    new_ancientwizard_deaths = 0,
    new_ancientwizard_assists = 0,
    new_ancientwizard_explode = 0,
    new_ancientwizard_regen = 0,

    // Blood Class
    new_bloodwizard_kills = 0,
    new_bloodwizard_deaths = 0,
    new_bloodwizard_assists = 0,
    new_bloodwizard_explode = 0,
    new_bloodwizard_regen = 0,

    // Fire Class
    new_firewizard_kills = 0,
    new_firewizard_deaths = 0,
    new_firewizard_assists = 0,
    new_firewizard_explode = 0,
    new_firewizard_regen = 0,

    // Hydro Class
    new_hydrowizard_kills = 0,
    new_hydrowizard_deaths = 0,
    new_hydrowizard_assists = 0,
    new_hydrowizard_explode = 0,
    new_hydrowizard_regen = 0,

    // Ice Class
    new_icewizard_kills = 0,
    new_icewizard_deaths = 0,
    new_icewizard_assists = 0,
    new_icewizard_explode = 0,
    new_icewizard_regen = 0,

    // Kinetic Class
    new_kineticwizard_kills = 0,
    new_kineticwizard_deaths = 0,
    new_kineticwizard_assists = 0,
    new_kineticwizard_explode = 0,
    new_kineticwizard_regen = 0,

    // Storm Class
    new_stormwizard_kills = 0,
    new_stormwizard_deaths = 0,
    new_stormwizard_assists = 0,
    new_stormwizard_explode = 0,
    new_stormwizard_regen = 0,

    // Toxic Class
    new_toxicwizard_kills = 0,
    new_toxicwizard_deaths = 0,
    new_toxicwizard_assists = 0,
    new_toxicwizard_explode = 0,
    new_toxicwizard_regen = 0,

    // Wither Class
    new_witherwizard_kills = 0,
    new_witherwizard_deaths = 0,
    new_witherwizard_assists = 0,
    new_witherwizard_explode = 0,
    new_witherwizard_regen = 0,
}): IHypixel => {

    // someone please optimize this im too dumb with typescript !!!!!!!!!!!!!!!! HELPPPP !!!!!!!!!!

    // GAME STATS
    model.stats.TNTGames.coins = handleSection(model.stats.TNTGames.coins, coins);
    model.stats.TNTGames.wins = handleSection(model.stats.TNTGames.wins, wins);

    // TNT Tag
    model.stats.TNTGames.modes.tnt_tag.deaths = handleSection(model.stats.TNTGames.modes.tnt_tag.deaths, deaths_tntag);
    model.stats.TNTGames.modes.tnt_tag.kills = handleSection(model.stats.TNTGames.modes.tnt_tag.kills, kills_tntag);
    model.stats.TNTGames.modes.tnt_tag.wins = handleSection(model.stats.TNTGames.modes.tnt_tag.wins, wins_tntag);

    // TNT Run
    model.stats.TNTGames.modes.tnt_run.deaths = handleSection(model.stats.TNTGames.modes.tnt_run.deaths, deaths_tntrun);
    model.stats.TNTGames.modes.tnt_run.wins = handleSection(model.stats.TNTGames.modes.tnt_run.wins, wins_tntrun);
    model.stats.TNTGames.modes.tnt_run.record = handleSection(model.stats.TNTGames.modes.tnt_run.record, record_tntrun);

    // PVP Run
    model.stats.TNTGames.modes.pvp_run.deaths = handleSection(model.stats.TNTGames.modes.pvp_run.deaths, deaths_pvprun);
    model.stats.TNTGames.modes.pvp_run.kills = handleSection(model.stats.TNTGames.modes.pvp_run.kills, kills_pvprun);
    model.stats.TNTGames.modes.pvp_run.wins = handleSection(model.stats.TNTGames.modes.pvp_run.wins, wins_pvprun);
    model.stats.TNTGames.modes.pvp_run.record = handleSection(model.stats.TNTGames.modes.pvp_run.record, record_pvprun);

    // Bow Spleef
    model.stats.TNTGames.modes.bow_spleef.deaths = handleSection(model.stats.TNTGames.modes.bow_spleef.deaths, deaths_bowspleef);
    model.stats.TNTGames.modes.bow_spleef.wins = handleSection(model.stats.TNTGames.modes.bow_spleef.wins, wins_bowspleef);
    model.stats.TNTGames.modes.bow_spleef.tags = handleSection(model.stats.TNTGames.modes.bow_spleef.tags, tags_bowspleef);

    // Wizards
    model.stats.TNTGames.modes.wizards.wins = handleSection(model.stats.TNTGames.modes.wizards.wins, wins_capture);
    model.stats.TNTGames.modes.wizards.kills = handleSection(model.stats.TNTGames.modes.wizards.kills, kills_capture);
    model.stats.TNTGames.modes.wizards.deaths = handleSection(model.stats.TNTGames.modes.wizards.deaths, deaths_capture);
    model.stats.TNTGames.modes.wizards.assists = handleSection(model.stats.TNTGames.modes.wizards.assists, assists_capture);
    if(capture_class) model.stats.TNTGames.modes.wizards.classes.current = capture_class;

    // Ancient Class
    model.stats.TNTGames.modes.wizards.classes.ancient.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.ancient.kills, new_ancientwizard_kills);
    model.stats.TNTGames.modes.wizards.classes.ancient.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.ancient.deaths, new_ancientwizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.ancient.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.ancient.assists, new_ancientwizard_assists);
    model.stats.TNTGames.modes.wizards.classes.ancient.power = handleSection(model.stats.TNTGames.modes.wizards.classes.ancient.power, new_ancientwizard_explode);
    model.stats.TNTGames.modes.wizards.classes.ancient.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.ancient.regen, new_ancientwizard_regen);

    // Blood Class
    model.stats.TNTGames.modes.wizards.classes.blood.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.blood.kills, new_bloodwizard_kills);
    model.stats.TNTGames.modes.wizards.classes.blood.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.blood.deaths, new_bloodwizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.blood.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.blood.assists, new_bloodwizard_assists);
    model.stats.TNTGames.modes.wizards.classes.blood.power = handleSection(model.stats.TNTGames.modes.wizards.classes.blood.power, new_bloodwizard_explode);
    model.stats.TNTGames.modes.wizards.classes.blood.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.blood.regen, new_bloodwizard_regen);

    // Fire Class
    model.stats.TNTGames.modes.wizards.classes.fire.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.fire.kills, new_firewizard_kills);
    model.stats.TNTGames.modes.wizards.classes.fire.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.fire.deaths, new_firewizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.fire.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.fire.assists, new_firewizard_assists);
    model.stats.TNTGames.modes.wizards.classes.fire.power = handleSection(model.stats.TNTGames.modes.wizards.classes.fire.power, new_firewizard_explode);
    model.stats.TNTGames.modes.wizards.classes.fire.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.fire.regen, new_firewizard_regen);

    // Hydro Class
    model.stats.TNTGames.modes.wizards.classes.hydro.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.hydro.kills, new_hydrowizard_kills);
    model.stats.TNTGames.modes.wizards.classes.hydro.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.hydro.deaths, new_hydrowizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.hydro.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.hydro.assists, new_hydrowizard_assists);
    model.stats.TNTGames.modes.wizards.classes.hydro.power = handleSection(model.stats.TNTGames.modes.wizards.classes.hydro.power, new_hydrowizard_explode);
    model.stats.TNTGames.modes.wizards.classes.hydro.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.hydro.regen, new_hydrowizard_regen);

    // Ice Class
    model.stats.TNTGames.modes.wizards.classes.ice.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.ice.kills, new_icewizard_kills);
    model.stats.TNTGames.modes.wizards.classes.ice.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.ice.deaths, new_icewizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.ice.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.ice.assists, new_icewizard_assists);
    model.stats.TNTGames.modes.wizards.classes.ice.power = handleSection(model.stats.TNTGames.modes.wizards.classes.ice.power, new_icewizard_explode);
    model.stats.TNTGames.modes.wizards.classes.ice.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.ice.regen, new_icewizard_regen);

    // Kinetic Class
    model.stats.TNTGames.modes.wizards.classes.kinetic.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.kinetic.kills, new_kineticwizard_kills);
    model.stats.TNTGames.modes.wizards.classes.kinetic.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.kinetic.deaths, new_kineticwizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.kinetic.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.kinetic.assists, new_kineticwizard_assists);
    model.stats.TNTGames.modes.wizards.classes.kinetic.power = handleSection(model.stats.TNTGames.modes.wizards.classes.kinetic.power, new_kineticwizard_explode);
    model.stats.TNTGames.modes.wizards.classes.kinetic.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.kinetic.regen, new_kineticwizard_regen);

    // Storm Class
    model.stats.TNTGames.modes.wizards.classes.storm.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.storm.kills, new_stormwizard_kills);
    model.stats.TNTGames.modes.wizards.classes.storm.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.storm.deaths, new_stormwizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.storm.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.storm.assists, new_stormwizard_assists);
    model.stats.TNTGames.modes.wizards.classes.storm.power = handleSection(model.stats.TNTGames.modes.wizards.classes.storm.power, new_stormwizard_explode);
    model.stats.TNTGames.modes.wizards.classes.storm.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.storm.regen, new_stormwizard_regen);

    // Toxic Class
    model.stats.TNTGames.modes.wizards.classes.toxic.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.toxic.kills, new_toxicwizard_kills);
    model.stats.TNTGames.modes.wizards.classes.toxic.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.toxic.deaths, new_toxicwizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.toxic.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.toxic.assists, new_toxicwizard_assists);
    model.stats.TNTGames.modes.wizards.classes.toxic.power = handleSection(model.stats.TNTGames.modes.wizards.classes.toxic.power, new_toxicwizard_explode);
    model.stats.TNTGames.modes.wizards.classes.toxic.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.toxic.regen, new_toxicwizard_regen);

    // Wither Class
    model.stats.TNTGames.modes.wizards.classes.wither.kills = handleSection(model.stats.TNTGames.modes.wizards.classes.wither.kills, new_witherwizard_kills);
    model.stats.TNTGames.modes.wizards.classes.wither.deaths = handleSection(model.stats.TNTGames.modes.wizards.classes.wither.deaths, new_witherwizard_deaths);
    model.stats.TNTGames.modes.wizards.classes.wither.assists = handleSection(model.stats.TNTGames.modes.wizards.classes.wither.assists, new_witherwizard_assists);
    model.stats.TNTGames.modes.wizards.classes.wither.power = handleSection(model.stats.TNTGames.modes.wizards.classes.wither.power, new_witherwizard_explode);
    model.stats.TNTGames.modes.wizards.classes.wither.regen = handleSection(model.stats.TNTGames.modes.wizards.classes.wither.regen, new_witherwizard_regen);

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