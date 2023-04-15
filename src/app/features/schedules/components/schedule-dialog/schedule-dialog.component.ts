import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.scss']
})
export class ScheduleDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  dialogType: string = '';
  name: string = '';
  category: string = '';
  startTime: string = '';
  endTime: string = '';
  duration: string = '';

  ngOnInit(): void {
    this.dialogType = this.data.type === 'edit' ? 'Edit' : 'Add';

    if (this.dialogType === 'Edit') {
      this.name = this.data?.schedule?.name;
      this.category = this.data?.schedule?.category;
      this.startTime = this.data?.schedule?.startTime;
      this.endTime = this.data?.schedule?.endTime;
      this.duration = this.startTime && this.endTime ? DateTime.fromISO(this.endTime).diff(DateTime.fromISO(this.startTime)).toFormat('h\'h\' m\'m\' s\'s\'') : 'Unable to compute duration';
    }
  }
}
