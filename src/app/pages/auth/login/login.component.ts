import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { clippingParents } from '@popperjs/core';

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
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  onLogin(){

     this.authSvc.login(this.form.value).subscribe((res) => {
        this.router.navigate(['qr']);
      }
 );


  }

}
