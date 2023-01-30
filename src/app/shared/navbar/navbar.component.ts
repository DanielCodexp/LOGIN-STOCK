import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent   implements OnInit{

  public isMobile = false;

  constructor(
    private deviceService: DeviceDetectorService
  ) {
    this.isMobile = deviceService.isMobile() || deviceService.isTablet();
   }

  ngOnInit(): void {
  }

}
