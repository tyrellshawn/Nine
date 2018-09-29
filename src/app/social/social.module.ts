import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialComponent } from './social.component';
import { SocialRoutingModule } from './social-routing.module';

@NgModule({
  declarations: [
    SocialComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule
  ]
})
export class SocialModule { }
