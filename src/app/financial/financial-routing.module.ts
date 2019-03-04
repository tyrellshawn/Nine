import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinancialComponent } from './financial.component';

const socialRoutes: Routes = [
  {path: '', component: FinancialComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(socialRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FinancialRoutingModule { }
