import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeCompArr } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService, AuthServiceModule } from 'shared-services';

@NgModule({
  declarations: [
    AppComponent,
    routeCompArr
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthServiceModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
