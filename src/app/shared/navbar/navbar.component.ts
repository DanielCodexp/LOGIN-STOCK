import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent   implements OnInit{

  public isMobile = false;
  public isLogged = false;
  constructor(
    private deviceService: DeviceDetectorService,
    private authSvc: AuthService,
    private router: Router,
  ) {
    this.isMobile = deviceService.isMobile() || deviceService.isTablet();
   }

  ngOnInit(): void {
    this.authSvc.isLogged.subscribe((res) =>(this.isLogged = res));
  }
  onLogout(){
    this.authSvc.logout();
 

  }
}
