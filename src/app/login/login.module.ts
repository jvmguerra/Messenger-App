import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdProgressSpinnerModule } from '@angular/material';

import { LoginCardComponent } from './login-card/login-card.component';
import { MainModule } from '../main/main.module';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdSelectModule,
    MainModule,
    MdProgressSpinnerModule
  ],
  declarations: [LoginCardComponent],
  exports: [LoginCardComponent]
})
export class LoginModule { }
