import { getDate } from './Time';
import chalk from 'chalk';

export default (function(cons){
    return {
        log: function(text: string){
            cons.log(`${getDate()} : ${chalk.blueBright('LOG ')}> ${text}`);
        },
        info: function (text: string) {
            cons.log(`${getDate()} : ${chalk.cyanBright('INFO ')}> ${text}`);
        },
        warn: function (text: string) {
            cons.log(`${getDate()} : ${chalk.yellow('WARN ')}> ${text}`);
        },
        error: function (text: string) {
            cons.log(`${getDate()} : ${chalk.redBright('ERROR ')}> ${text}`);
        },
        load: function (text: string) {
            cons.log(`${getDate()} : ${chalk.yellowBright('LOAD ')}> ${text}`);
        }
    };
}(console));