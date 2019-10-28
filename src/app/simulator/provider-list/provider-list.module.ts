import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderListComponent } from './provider-list.component';
import { ProviderListRoutingModule } from './provider-list-routing.module';
import { ProviderItemModule } from '../provider-item/provider-item.module';

@NgModule({
  declarations: [ProviderListComponent],
  imports: [CommonModule, ProviderListRoutingModule, ProviderItemModule],
  exports: [ProviderListComponent]
})
export class ProviderListModule {}
