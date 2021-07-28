import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectCountComponent } from './subject-count.component';

const routes: Routes = [
  {
    path : '',
    component : SubjectCountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectCountTimerRoutingModule { }
