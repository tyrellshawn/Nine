import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulatorFormComponent } from './simulator-form.component';
import { SimulatorFormRoutingModule } from './simulator-form-routing.module';
import { CountryItemModule } from '../country-item/country-item.module';

@NgModule({
  declarations: [SimulatorFormComponent],
  imports: [CommonModule, SimulatorFormRoutingModule, CountryItemModule],
  exports: [SimulatorFormComponent]
})
export class SimulatorFormModule {}
