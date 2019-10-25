import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatFormComponent } from './chat-form.component';
import { ChatFormRoutingModule } from './chat-form-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
@NgModule({
  declarations: [ChatFormComponent],
  imports: [
    CommonModule,
    ChatFormRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  exports: [ChatFormComponent]
})
export class ChatFormModule {}
