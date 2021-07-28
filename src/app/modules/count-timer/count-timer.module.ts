import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountTimerRoutingModule } from './count-timer-routing.module';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';
import { TimerComponent } from './timer.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    CompFourComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    CountTimerRoutingModule,
    FormsModule,
    CommonModule,
  ]
})
export class CountTimerModule { }
