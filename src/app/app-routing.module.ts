import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { RouteImageComponent } from './components/route-image/route-image.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path : 'link-1',
    component: RouteImageComponent
  },
  {
    path : 'link-2',
    component: GridViewComponent
  },
  {
    path: 'link-3',
    loadChildren: () => import('./modules/count-timer/count-timer.module').then(m => m.CountTimerModule)
  },
  {
    path: 'link-4',
    loadChildren: () => import('./modules/subject-count-timer/subject-count-timer.module').then(m => m.SubjectCountTimerModule)
  },
  {
    path: 'link-5',
    component: UsersListComponent
  },
  {
    path: 'link-6',
    component: DynamicDivComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
