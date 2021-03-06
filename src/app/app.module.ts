import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { SimulatorFormModule } from './simulator/simulator-form/simulator-form.module';
import { EmailFormComponent } from './email-form/email-form.component';
import { PopupModule } from './popups/popup.module';

import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule, 
    AuthModule, 
    PopupModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SimulatorFormModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
