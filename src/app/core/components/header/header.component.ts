import { Component, Input, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MainService } from 'src/app/features/main/services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  currentTime: number = Date.now();
  currentTimeInterval: NodeJS.Timer;

  @Input() drawer!: MatDrawer;

  constructor(public mainService: MainService) {
    this.currentTimeInterval = setInterval(() => this.currentTime = Date.now(), 1);
  }

  ngOnDestroy(): void {
    clearInterval(this.currentTimeInterval);
  }
}
