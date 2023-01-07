import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './features/login/login.module';
import { MainModule } from './features/main/main.module';
import { NewAccountModule } from './features/new-account/new-account.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    MainModule,
    NewAccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
