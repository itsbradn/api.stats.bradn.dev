import { getDate } from './Time.module';
import chalk from 'chalk';

export default (function(cons){
    return {
        log: function(text: string){
            cons.log(`[${getDate()}] ${chalk.blueBright.italic('i ')}${text}`);
        },
        info: function (text: string) {
            cons.log(`[${getDate()}] ${chalk.cyanBright('i ')}${text}`);
        },
        warn: function (text: string) {
            cons.log(`[${getDate()}] ${chalk.bgYellow.black(' WARN ')} ${text}`);
        },
        error: function (text: string) {
            cons.log(`[${getDate()}] ${chalk.bgRed.black(' ERROR ')} ${text}`);
        },
        load: function (text: string) {
            cons.log(`[${getDate()}] ${chalk.yellowBright('LOAD ')}> ${text}`);
        },
        success: function (text: string) {
            cons.log(`[${getDate()}] ${chalk.greenBright('√ ')}${text}`);
        }
    };
}(console));