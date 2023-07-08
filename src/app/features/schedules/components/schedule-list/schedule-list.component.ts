import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { Schedule } from '../../models/schedule';
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from 'uuid';
import { MatTable, MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ScheduleDialogComponent } from '../schedule-dialog/schedule-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable) table: MatTable<any> | undefined;
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  faSpinner = faSpinner;
  
  isScheduleRunning: boolean = false;
  displayedColumns: string[] = ['name', 'category', 'startTime', 'endTime', 'duration', 'action'];
  dataSource: MatTableDataSource<Schedule> = new MatTableDataSource<Schedule>();

  currentUser: string = 'Daniel Lee';
  defaultName: string = 'Schedule';
  defaultCategory: string = 'Category';
  schedules: Schedule[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.schedules = [
      new Schedule(this.currentUser, 'Schedule', 'Category', new Date('January 15, 2023 08:04:25'), new Date('January 15, 2023 16:01:30')),
      new Schedule(this.currentUser, 'Schedule', 'Category', new Date('January 16, 2023 08:01:22'), new Date('January 16, 2023 16:02:20')),
      new Schedule(this.currentUser, 'Schedule', 'Category', new Date('January 17, 2023 08:00:15'), new Date('January 17, 2023 16:03:55')),
    ];

    this.dataSource = new MatTableDataSource(this.schedules);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  startSchedule(): void {
    this.isScheduleRunning = true;

    const newSchedule: Schedule = {
      id: uuidv4(),
      user: this.currentUser,
      name: this.defaultName,
      category: this.defaultCategory,
      startTime: new Date(),
      endTime: undefined,
      duration: 0,
    }

    this.schedules.push(newSchedule);

    this.refreshTable();
  }

  endSchedule(): void {
    this.isScheduleRunning = false;

    this.schedules[this.schedules.length - 1].endTime = new Date();

    this.refreshTable();
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
    const schedule: Schedule = new Schedule(this.currentUser, 'Schedule', 'Category', new Date(), new Date());

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

        this.refreshTable();
      }
    });
  }

  deleteSchedule(index: number): void {
    this.schedules.splice(index, 1);

    this.refreshTable();
  }

  refreshTable(): void {
    this.dataSource = new MatTableDataSource(this.schedules);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.table?.renderRows();
  }
}
