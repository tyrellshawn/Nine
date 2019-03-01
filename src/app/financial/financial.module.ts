import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialComponent } from './financial.component';
import { FinancialRoutingModule } from './financial-routing.module';

@NgModule({
  declarations: [
    FinancialComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }
