import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  isAdmin = false;
  @Output() toggleSidenav = new EventEmitter <void> ();
  constructor(private authSvc: AuthService) {

  }
  ngOnInit(): void { }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
  onLogout(){
    this.authSvc.logout()
  }
}
