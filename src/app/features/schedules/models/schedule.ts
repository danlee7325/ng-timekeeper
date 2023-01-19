import { v4 as uuidv4 } from 'uuid';

export class Schedule {
    id: string;
    user: string;
    name: string;
    category: string;
    startTime: Date;
    endTime: Date;

    constructor(user: string = '', name: string = '', category: string = '', startTime: Date = new Date(0), endTime: Date = new Date(0)) {
        this.id = uuidv4();
        this.user = user;
        this.name = name;
        this.category = category;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}