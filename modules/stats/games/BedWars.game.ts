import { HydratedDocument, IndexDefinition } from 'mongoose';
import { Key } from 'readline';
import { object } from 'webidl-conversions';
import { HYPIXEL_SECTION_DEFAULT } from '../../../constant/hypixel.constant';
import { IHypixel, HypixelStat, HypixelSection } from '../../../models/hypixel.model';

const EASY_LEVELS = 4;
const EASY_LEVELS_XP = 7000;
const XP_PER_PRESTIGE = 96 * 5000 + EASY_LEVELS_XP;
const LEVELS_PER_PRESTIGE = 100;
const HIGHEST_PRESTIGE = 10;

export default (model: IHypixel, {
    coins = 0,
    wins_bedwars = 0,
    losses_bedwars = 0,
    games_played_bedwars_1 = 0,
    games_played_bedwars = 0,
    kills_bedwars = 0,
    deaths_bedwars = 0,
    Experience = 0,
    winstreak = 0,
    beds_broken_bedwars = 0,
    beds_lost_bedwars = 0,
    final_kills_bedwars = 0,
    final_deaths_bedwars = 0,
    void_kills_bedwars = 0,
    void_deaths_bedwars = 0,
    bedwars_boxes = 0,
    bedwars_box = 0,
    bedwars_box_commons = 0,
    bedwars_box_rares = 0,
    bedwars_box_epics = 0,
    bedwars_box_legendaries = 0,
    iron_resources_collected_bedwars = 0,
    gold_resources_collected_bedwars = 0,
    diamond_resources_collected_bedwars = 0,
    emerald_resources_collected_bedwars = 0,
    packages = [],
    practice = {},
    ...rest
}): IHypixel => {


    /*
     * MODE HANDLING 
     */
    
    const getModeStats = (regexp: RegExp) => pickKeys(rest, {
        regexp,
        keyMap: (key: string) => key.replace(regexp, '')
            .replace(/^_/, '')
            .replace(' _', '_')
            .replace('_bedwars', '')
            .replace('__', '_'),
    });
    const gamemodes: Keyable = {};
    Object.keys(betterModeNames).forEach((name) => {
        if (!betterModeNames[name]) return;
        let final = betterModeNames[name] as string;
        gamemodes[final] = getModeStats(new RegExp(`^${name}_`));
    });
    for(var gameMode in gamemodes) {
        const gameValue = gamemodes[gameMode] as KeyableObject;
        if (!gameValue) continue;
        if (!(model.stats.BedWars.modes[gameMode])) continue;
        let dbData: BedWarsMode = {
            kills: handleSection(model.stats.BedWars.modes[gameMode].kills, gameValue?.kills?.toString() || 0),
            deaths: handleSection(model.stats.BedWars.modes[gameMode].deaths, gameValue?.deaths?.toString() || 0),
            final_kills: handleSection(model.stats.BedWars.modes[gameMode].final_kills, gameValue?.final_kills?.toString() || 0),
            final_deaths: handleSection(model.stats.BedWars.modes[gameMode].final_deaths, gameValue?.final_deaths?.toString() || 0),
            wins: handleSection(model.stats.BedWars.modes[gameMode].wins, gameValue?.wins?.toString() || 0),
            losses: handleSection(model.stats.BedWars.modes[gameMode].losses, gameValue?.losses?.toString() || 0),
            beds_broken: handleSection(model.stats.BedWars.modes[gameMode].beds_broken, gameValue?.beds_broken?.toString() || 0),
            beds_lost: handleSection(model.stats.BedWars.modes[gameMode].beds_lost, gameValue?.beds_lost?.toString() || 0),
            winstreak: handleSection(model.stats.BedWars.modes[gameMode].beds_lost, 0),
            games_played: handleSection(model.stats.BedWars.modes[gameMode].games_played, gameValue?.games_played?.toString() || 0),
        }
        model.stats.BedWars.modes[gameMode] = dbData;
    }


    /*
     * STAT HANDLING 
     */

    // OVERALL
    const bedwarsLevel = getLevelForExp(Experience);
    model.stats.BedWars.coins = handleSection(model.stats.BedWars.coins, coins);
    model.stats.BedWars.exp = handleSection(model.stats.BedWars.exp, Experience);
    model.stats.BedWars.level = handleSection(model.stats.BedWars.level, bedwarsLevel);
    model.stats.BedWars.wins = handleSection(model.stats.BedWars.wins, wins_bedwars);
    model.stats.BedWars.losses = handleSection(model.stats.BedWars.losses, losses_bedwars);
    model.stats.BedWars.games_played = handleSection(model.stats.BedWars.games_played, games_played_bedwars);
    model.stats.BedWars.ingame_games_played = handleSection(model.stats.BedWars.ingame_games_played, games_played_bedwars_1);
    model.stats.BedWars.kills = handleSection(model.stats.BedWars.kills, kills_bedwars);
    model.stats.BedWars.deaths = handleSection(model.stats.BedWars.deaths, deaths_bedwars);
    model.stats.BedWars.beds_broken = handleSection(model.stats.BedWars.beds_broken, beds_broken_bedwars);
    model.stats.BedWars.beds_lost = handleSection(model.stats.BedWars.beds_lost, beds_lost_bedwars);
    model.stats.BedWars.final_kills = handleSection(model.stats.BedWars.final_kills, final_kills_bedwars);
    model.stats.BedWars.final_deaths = handleSection(model.stats.BedWars.final_deaths, final_deaths_bedwars);
    model.stats.BedWars.void_kills = handleSection(model.stats.BedWars.void_kills, void_kills_bedwars);
    model.stats.BedWars.void_deaths = handleSection(model.stats.BedWars.void_deaths, void_deaths_bedwars);
    model.stats.BedWars.winstreak = handleSection(model.stats.BedWars.winstreak, winstreak);

    // LOOT BOXES
    model.stats.BedWars.boxes.current = bedwars_boxes;
    model.stats.BedWars.boxes.opened = bedwars_box;
    model.stats.BedWars.boxes.commons = bedwars_box_commons;
    model.stats.BedWars.boxes.rares = bedwars_box_rares;
    model.stats.BedWars.boxes.epics = bedwars_box_epics;
    model.stats.BedWars.boxes.legendaries = bedwars_box_legendaries;

    // RESOURCES COLLECTED
    model.stats.BedWars.resources_collected.iron = iron_resources_collected_bedwars;
    model.stats.BedWars.resources_collected.gold = gold_resources_collected_bedwars;
    model.stats.BedWars.resources_collected.diamond = diamond_resources_collected_bedwars;
    model.stats.BedWars.resources_collected.emerald = emerald_resources_collected_bedwars;

    console.log(bedwarsLevel);

    return model;
}
type Keyable = {
    [key: string]: string | number | object | undefined
}
type KeyableObject = {
    [key: string]: object
}

function getLevelRespectingPrestige(level: number) {
    if (level > HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE) {
        return level - HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE;
    }

    return level % LEVELS_PER_PRESTIGE;
}

function getExpForLevel(level: number) {
    if (level === 0) return 0;

    const respectedLevel = getLevelRespectingPrestige(level);
    if (respectedLevel > EASY_LEVELS) {
        return 5000;
    }

    switch (respectedLevel) {
        case 1:
            return 500;
        case 2:
            return 1000;
        case 3:
            return 2000;
        case 4:
            return 3500;
        default:
            return 5000;
    }
}

function getLevelForExp(exp: number) {
    const prestiges = Math.floor(exp / XP_PER_PRESTIGE);
    let level = prestiges * LEVELS_PER_PRESTIGE;
    let expWithoutPrestiges = exp - (prestiges * XP_PER_PRESTIGE);
    let expForEasyLevel;

    for (let i = 1; i <= EASY_LEVELS; i += 1) {
        expForEasyLevel = getExpForLevel(i);
        if (expWithoutPrestiges < expForEasyLevel) {
            break;
        }
        level += 1;
        expWithoutPrestiges -= expForEasyLevel;
    }
    console.log(expWithoutPrestiges);
    return parseFloat((level + (expWithoutPrestiges / 5000)).toFixed(2));
}

function pickKeys(object: any, options: any) {
    const regexp = options.regexp || /.+/;
    const filter = options.filter || (() => true);
    const keyMap = options.keyMap || ((key: any) => key);
    const valueMap = options.valueMap || ((value: any) => value);
  
    return fromEntries(Object.entries(object)
      .filter(([key, value]) => regexp.test(key) && filter(key, value))
      .map(([key, value]) => [keyMap(key), valueMap(value)]));
  }

  function fromEntries(array: Array<any>) {
    // eslint-disable-next-line unicorn/no-reduce
    return array.reduce((object, [key, value]) => {
      object[key] = value;
      return object;
    }, {});
  }

  const betterModeNames: Keyable = {
      'eight_one(?!_rush|_ultimate)': 'solo',
      'eight_two(?!_rush|_ultimate|_lucky|_voidless|_armed)': 'doubles',
      four_three: '3v3v3v3',
      'four_four(?!_rush|_ultimate|_lucky|_voidless|_armed)': '4v4v4v4',
      two_four: '4v4',
      eight_one_rush: 'rush_solo',
      eight_two_rush: 'rush_doubles',
      four_four_rush: 'rush_4v4v4v4',
      eight_one_ultimate: 'ultimate_solo',
      eight_two_ultimate: 'ultimate_doubles',
      four_four_ultimate: 'ultimate_4v4v4v4',
      eight_two_lucky: 'lucky_doubles',
      four_four_lucky: 'lucky_4v4v4v4',
      eight_two_voidless: 'voidless_doubles',
      four_four_voidless: 'voidless_4v4v4v4',
      eight_two_armed: 'armed_doubles',
      four_four_armed: 'armed_4v4v4v4',
      castle: 'castle',
    };

  export interface BedWarsMode {
      kills: HypixelSection,
      deaths: HypixelSection,
      final_kills: HypixelSection,
      final_deaths: HypixelSection,
      wins: HypixelSection,
      losses: HypixelSection,
      beds_broken: HypixelSection,
      beds_lost: HypixelSection,
      winstreak: HypixelSection,
      games_played: HypixelSection,
  }

  export const DefaultBedWarsMode: BedWarsMode = {
      kills: HYPIXEL_SECTION_DEFAULT,
      deaths: HYPIXEL_SECTION_DEFAULT,
      final_kills: HYPIXEL_SECTION_DEFAULT,
      final_deaths: HYPIXEL_SECTION_DEFAULT,
      wins: HYPIXEL_SECTION_DEFAULT,
      losses: HYPIXEL_SECTION_DEFAULT,
      beds_broken: HYPIXEL_SECTION_DEFAULT,
      beds_lost: HYPIXEL_SECTION_DEFAULT,
      winstreak: HYPIXEL_SECTION_DEFAULT,
      games_played: HYPIXEL_SECTION_DEFAULT,
  }

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
        if (typeof value === 'string') value = parseInt(value) || 0;
      return {
          value: value,
          history: handleArray(location.history, value)
      }
  }