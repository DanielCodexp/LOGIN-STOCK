import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
constructor(
  private authSvc: AuthService,
  private fb: FormBuilder,
  private router: Router,
){}
  ngOnInit(): void {
    // const userData = {
    //   username: 'daniel',
    //   password: '123456'
    // };
    // this.authSvc.login(userData).subscribe((res) => console.log('Login'));
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  onLogin(){
    // const sep = this.log.value


    console.log( this.form.value)
     this.authSvc.login(this.form.value).subscribe((res) => {
      console.log('h')

        this.router.navigate(['qr']);
      }
 );


  }

}
