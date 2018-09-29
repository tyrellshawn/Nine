import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocialComponent } from './social.component';

const socialRoutes: Routes = [
  {path: '', component: SocialComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(socialRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SocialRoutingModule { }
