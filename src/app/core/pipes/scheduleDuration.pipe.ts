import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';
import { Schedule } from 'src/app/features/schedules/models/schedule';

@Pipe({
    name: 'scheduleDuration'
})

export class ScheduleDurationPipe implements PipeTransform {
    transform(schedule: Schedule) {
        if (schedule.startTime < schedule.endTime) {
            return DateTime.fromJSDate(schedule.endTime).diff(DateTime.fromJSDate(schedule.startTime)).toFormat('h\'h\' m\'m\' s\'s\'');
        } else {
            return 'Cannot calculate a duration!';
        }
    }
}