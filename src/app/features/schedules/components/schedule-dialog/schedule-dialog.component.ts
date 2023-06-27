import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Schedule } from '../../models/schedule';
import { TimeService } from 'src/app/core/services/time/time.service';

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.scss']
})
export class ScheduleDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ScheduleDialogComponent>,
    private timeService: TimeService
  ) {}

  dialogType: string = '';
  name: string = '';
  category: string = '';
  startTime: string = '';
  endTime: string = '';
  duration: string = '';

  ngOnInit(): void {
    this.dialogType = this.data.type === 'edit' ? 'Edit' : 'Add';

    this.name = this.data.schedule.name;
    this.category = this.data.schedule.category;
    this.startTime = this.timeService.formatTime(this.data.schedule.startTime);
    this.endTime = this.timeService.formatTime(this.data.schedule.endTime);
    this.duration = this.timeService.calculateDuration(this.data.schedule.startTime, this.data.schedule.endTime);
  }

  calculateDuration(): void {
    this.duration = this.timeService.calculateDuration(new Date(this.startTime), new Date(this.endTime));
  }

  cancel(): void {
    this.dialogRef.close();
  }

  adjustSchedule(): void {
    this.dialogRef.close(
      {
        name: this.name,
        category: this.category,
        startTime: this.startTime,
        endTime: this.endTime,
      }
    )
  }
}
