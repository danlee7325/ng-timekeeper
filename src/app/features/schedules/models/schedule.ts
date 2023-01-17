import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

export class Schedule {
    id: string;
    user: string;
    name: string;
    category: string;
    startTime: Date;
    endTime: Date;

    constructor() {
        this.id = uuidv4();
        this.user = '';
        this.name = '';
        this.category = '';
        this.startTime = new Date(0);
        this.endTime = new Date(0);
    }

    calculateDuration(): string {
        return DateTime.fromJSDate(this.endTime).diff(DateTime.fromJSDate(this.startTime)).toFormat('hh:ss');
    }
}