import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulatorFormComponent } from './simulator-form.component';
import { SimulatorFormRoutingModule } from './simulator-form-routing.module';
import { CountryItemModule } from '../country-item/country-item.module';
import { ProviderItemModule } from '../provider-item/provider-item.module';
import { ProviderListModule } from '../provider-list/provider-list.module';
import { BreakdownFormModule } from '../breakdown-form/breakdown-form.module';
import { TransferFormModule } from '../transfer-form/transfer-form.module';

@NgModule({
  declarations: [SimulatorFormComponent],
  imports: [
    CommonModule,
    SimulatorFormRoutingModule,
    CountryItemModule,
    ProviderItemModule,
    ProviderListModule,
    BreakdownFormModule,
    TransferFormModule
  ],
  exports: [SimulatorFormComponent]
})
export class SimulatorFormModule {}
