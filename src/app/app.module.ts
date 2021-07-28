import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteImageComponent } from './components/route-image/route-image.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DynamicDivComponent } from './components/dynamic-div/dynamic-div.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RouteImageComponent,
    GridViewComponent,
    UsersListComponent,
    DynamicDivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
