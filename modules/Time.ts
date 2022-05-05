/* Imports */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Los_Angeles");

const getDate = () => {
    return dayjs().format('MMMM-D-YYYY h:mm:ssA');
}

export {
    getDate
}