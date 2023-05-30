import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('navDrawer') navDrawer!: MatDrawer;
  @ViewChild('navDrawerContent') navDrawerContent!: MatDrawerContent;

  constructor(private mainService: MainService, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.mainService.navDrawer = this.navDrawer;

    console.log(this.navDrawer);

    console.log(this.navDrawerContent);
  }
}
