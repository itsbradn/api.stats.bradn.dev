import { HydratedDocument, IndexDefinition } from 'mongoose';
import {IHypixel} from '../../../models/hypixel.model';

export default (model: IHypixel, {
    // GAME STATS
    number: coins = 0,
    number: wins = 0,

    // TNT Tag
    number: kills_tntag = 0,
    number: wins_tntag = 0,
    number: deaths_tntag = 0,

    // TNT Run
    number: deaths_tntrun = 0,
    number: wins_tntrun = 0,
    number: record_tntrun = 0,

    // PVP Run
    number: deaths_pvprun = 0,
    number: kills_pvprun = 0,
    number: wins_pvprun = 0,
    number: record_pvprun = 0,

    // Bow Spleef
    number: deaths_bowspleef = 0,
    number: wins_bowspleef = 0,
    number: tags_bowspleef = 0,

    // Wizards
    number: wins_capture = 0,
    number: kills_capture = 0,
    number: deaths_capture = 0,
    number: assists_capture = 0,
    string: capture_class = 0,

    // Ancient Class
    number: new_ancientwizard_kills = 0,
    number: new_ancientwizard_deaths = 0,
    number: new_ancientwizard_assists = 0,
    number: new_ancientwizard_explode = 0,
    number: new_ancientwizard_regen = 0,

    // Blood Class
    number: new_bloodwizard_kills = 0,
    number: new_bloodwizard_deaths = 0,
    number: new_bloodwizard_assists = 0,
    number: new_bloodwizard_explode = 0,
    number: new_bloodwizard_regen = 0,

    // Fire Class
    number: new_firewizard_kills = 0,
    number: new_firewizard_deaths = 0,
    number: new_firewizard_assists = 0,
    number: new_firewizard_explode = 0,
    number: new_firewizard_regen = 0,

    // Hydro Class
    number: new_hydrowizard_kills = 0,
    number: new_hydrowizard_deaths = 0,
    number: new_hydrowizard_assists = 0,
    number: new_hydrowizard_explode = 0,
    number: new_hydrowizard_regen = 0,

    // Ice Class
    number: new_icewizard_kills = 0,
    number: new_icewizard_deaths = 0,
    number: new_icewizard_assists = 0,
    number: new_icewizard_explode = 0,
    number: new_icewizard_regen = 0,

    // Kinetic Class
    number: new_kineticwizard_kills = 0,
    number: new_kineticwizard_deaths = 0,
    number: new_kineticwizard_assists = 0,
    number: new_kineticwizard_explode = 0,
    number: new_kineticwizard_regen = 0,

    // Storm Class
    number: new_stormwizard_kills = 0,
    number: new_stormwizard_deaths = 0,
    number: new_stormwizard_assists = 0,
    number: new_stormwizard_explode = 0,
    number: new_stormwizard_regen = 0,

    // Toxic Class
    number: new_toxicwizard_kills = 0,
    number: new_toxicwizard_deaths = 0,
    number: new_toxicwizard_assists = 0,
    number: new_toxicwizard_explode = 0,
    number: new_toxicwizard_regen = 0,

    // Toxic Class
    number: new_witherwizard_kills = 0,
    number: new_witherwizard_deaths = 0,
    number: new_witherwizard_assists = 0,
    number: new_witherwizard_explode = 0,
    number: new_witherwizard_regen = 0,
}) => {


    let res = {
        coins: {
            value: coins,
            history: fillArray(coins)
        }
    }

    return res;

    function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
        return key in obj
      }

    function fillArray(path: string) {
        let curArray = model.stats.TNTGames[path as keyof IHypixel];
        if (!curArray)
    }
}