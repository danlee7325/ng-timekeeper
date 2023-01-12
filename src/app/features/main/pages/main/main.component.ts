import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('navDrawer') navDrawer!: MatDrawer;
  @ViewChild('scheduleDrawer') scheduleDrawer!: MatDrawer;

  constructor(private mainService: MainService) {}

  ngAfterViewInit(): void {
    this.mainService.navDrawer = this.navDrawer;
    this.mainService.scheduleDrawer = this.scheduleDrawer;
  }
}
