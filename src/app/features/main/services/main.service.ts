import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public navDrawer!: MatDrawer;
  public scheduleDrawer!: MatDrawer;

  constructor() { }
}
