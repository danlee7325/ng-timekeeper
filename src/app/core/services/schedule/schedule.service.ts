import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Schedule } from 'src/app/features/schedules/models/schedule';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  private MONTHS: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // TODO
  // getUserSchedule(userId: string): Schedule[] {
  // }

  getStaticSchedule(): Schedule[] {
    const schedules: Schedule[] = [
      {
        id: uuidv4(),
        user: 'Daniel Lee',
        name: 'Schedule 1',
        category: 'Category 1',
        startTime: new Date('January 15, 2023 08:04:25'),
        endTime: new Date('January 15, 2023 16:01:30'),
      },
      {
        id: uuidv4(),
        user: 'Daniel Lee',
        name: 'Schedule 2',
        category: 'Category 2',
        startTime: new Date('January 16, 2023 08:01:22'),
        endTime: new Date('January 16, 2023 16:02:20'),
      },
      {
        id: uuidv4(),
        user: 'Daniel Lee',
        name: 'Schedule 3',
        category: 'Category 3',
        startTime: new Date('January 17, 2023 08:00:15'),
        endTime: new Date('January 17, 2023 16:03:55'),
      }
    ];

    return schedules;
  }
}

