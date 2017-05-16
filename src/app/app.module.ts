import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';

import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';

import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import {MomentModule} from 'angular2-moment';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    LoginModule,
    BrowserAnimationsModule,
    routing,
    MomentModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
