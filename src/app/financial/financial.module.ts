import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialComponent } from './financial.component';
import { FinancialRoutingModule } from './financial-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    FinancialComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }
