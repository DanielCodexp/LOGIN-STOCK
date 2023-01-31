import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SafePipe } from '../pipes/safe.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';



@NgModule({
  declarations: [
    HomeComponent,
    SafePipe,
  ],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    BrowserModule,
    NgxScannerQrcodeModule

  ]
})
export class HomeModule { }
