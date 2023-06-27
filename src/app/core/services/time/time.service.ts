import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  formatTime(time: Date): string {
    return DateTime.fromJSDate(time).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }

  calculateDuration(startTime: Date, endTime: Date): string {
    const dtStartTime: DateTime = DateTime.fromJSDate(startTime);
    const dtEndTime: DateTime = DateTime.fromJSDate(endTime);

    if (dtEndTime && dtStartTime) {
      return dtEndTime.diff(dtStartTime).toFormat('h\'h\' m\'m\' s\'s\'');
    } else {
      return 'Cannot calculate a duration!';
    }
  }
}
