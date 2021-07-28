import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectCountTimerRoutingModule } from './subject-count-timer-routing.module';
import { SubjectCountComponent } from './subject-count.component';
import { FormsModule } from '@angular/forms';
import { CompFourComponent } from '../subject-count-timer/comp-four/comp-four.component';
import { CompThreeComponent } from '../subject-count-timer/comp-three/comp-three.component';
import { CompTwoComponent } from '../subject-count-timer/comp-two/comp-two.component';
import { CompOneComponent } from '../subject-count-timer/comp-one/comp-one.component';


@NgModule({
  declarations: [
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    CompFourComponent,
    SubjectCountComponent
  ],
  imports: [
    CommonModule,
    SubjectCountTimerRoutingModule,
    FormsModule,
    CommonModule,
  ]
})
export class SubjectCountTimerModule { }
