import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakdownFormComponent } from './breakdown-form.component';
import { BreakdownFormRoutingModule } from './breakdown-form-routing.module';

@NgModule({
  declarations: [BreakdownFormComponent],
  imports: [CommonModule, BreakdownFormRoutingModule],
  exports: [BreakdownFormComponent]
})
export class BreakdownFormModule {}
