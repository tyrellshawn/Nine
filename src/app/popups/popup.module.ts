import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';
import { EmailNotVerifiedComponent } from './email-not-verified';

@NgModule({
  declarations: [
    EmailNotVerifiedComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  bootstrap: [
    EmailNotVerifiedComponent
  ]
})
export class PopupModule { }
