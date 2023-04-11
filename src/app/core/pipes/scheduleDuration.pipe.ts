import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';
import { Schedule } from 'src/app/features/schedules/models/schedule';

@Pipe({
    name: 'scheduleDuration',
    pure: false
})

export class ScheduleDurationPipe implements PipeTransform {
    transform(schedule: Schedule) {
        if (schedule.endTime && schedule.startTime < schedule.endTime) {
            return DateTime.fromJSDate(schedule.endTime).diff(DateTime.fromJSDate(schedule.startTime)).toFormat('h\'h\' m\'m\' s\'s\'');
        } else if (!schedule.endTime && schedule.startTime) {
            return DateTime.now().diff(DateTime.fromJSDate(schedule.startTime)).toFormat('h\'h\' m\'m\' s\'s\'');
        } else {
            return 'Cannot calculate a duration!';
        }
    }
}
