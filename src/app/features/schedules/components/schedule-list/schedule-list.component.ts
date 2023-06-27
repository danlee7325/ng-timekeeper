import { Component, OnInit, ViewChild } from '@angular/core';

import { Schedule } from '../../models/schedule';

import { v4 as uuidv4 } from 'uuid';
import { DateTime } from 'luxon';

import { MatTable } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any> | undefined;

  faSpinner = faSpinner;
  
  isScheduleRunning: boolean = false;
  displayedColumns: string[] = ['name', 'category', 'startTime', 'endTime', 'duration', 'action'];

  // Dummy data since project is not connected to an API yet
  schedules: Schedule[] = [
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
  currentUser: string = 'Daniel Lee';
  defaultName: string = 'Schedule';
  defaultCategory: string = 'Category';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  startSchedule(): void {
    this.isScheduleRunning = true;

    const newSchedule: Schedule = {
      id: uuidv4(),
      user: this.currentUser,
      name: this.defaultName,
      category: this.defaultCategory,
      startTime: new Date(),
      endTime: undefined
    }

    this.schedules.push(newSchedule);

    this.table?.renderRows()
  }

  endSchedule(): void {
    this.isScheduleRunning = false;

    this.schedules[this.schedules.length - 1].endTime = new Date();

    this.table?.renderRows();
  }

  calculateDuration(startTime: Date, endTime: Date): string {
    let duration: string = ''
    
    if (startTime !== endTime) {
      duration = DateTime.fromJSDate(endTime).diff(DateTime.fromJSDate(startTime)).toFormat('h\'h\' m\'m\' s\'s\'');
    } else {
      duration = DateTime.now().diff(DateTime.fromJSDate(startTime)).toFormat('h\'h\' m\'m\' s\'s\'');
    }

    return duration;
  }

  openEdit(schedule: Schedule): void {
    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      data: {
        type: 'edit',
        schedule: schedule,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        schedule.name = result?.name;
        schedule.category = result?.category;
        schedule.startTime = new Date(result?.startTime);
        schedule.endTime = new Date(result?.endTime);
      }
    });
  }

  openAdd(): void {
    const schedule: Schedule = {
      id: uuidv4(),
      user: this.currentUser,
      name: 'Schedule',
      category: 'Category',
      startTime: new Date(),
      endTime: new Date(),
    };

    const dialogRef = this.dialog.open(ScheduleDialogComponent, {
      data: {
        type: 'add',
        schedule: schedule,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        schedule.name = result?.name;
        schedule.category = result?.category;
        schedule.startTime = new Date(result?.startTime);
        schedule.endTime = new Date(result?.endTime);

        this.schedules.push(schedule);

        this.table?.renderRows();
      }
    });
  }

  deleteSchedule(index: number) {
    this.schedules.splice(index, 1);

    this.table?.renderRows();
  }
}