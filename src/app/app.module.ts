import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'logging',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingComponent,
  },
];

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
      // {enableTracing: true}
      ),
    FormsModule ],
  declarations: [ AppComponent, HelloComponent, LandingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
