import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimulatorFormModule } from './simulator/simulator-form/simulator-form.module';
import { EmailFormComponent } from './email-form/email-form.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, EmailFormComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SimulatorFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
