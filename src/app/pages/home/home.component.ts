import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(  private authSvc: AuthService){

  }
  isLoged = this.authSvc.isLoged;
  ngOnInit(): void {

    console.log(this.isLoged)
  }

}
