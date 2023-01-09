import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  currentTime: number = Date.now();
  currentTimeInterval: NodeJS.Timer;

  constructor() {
    this.currentTimeInterval = setInterval(() => this.currentTime = Date.now(), 1);
  }

  ngOnDestroy(): void {
    clearInterval(this.currentTimeInterval);
  }

}
