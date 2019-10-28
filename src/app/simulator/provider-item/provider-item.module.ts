import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderItemComponent } from './provider-item.component';
import { ProviderItemRoutingModule } from './provider-item-routing.module';

@NgModule({
  declarations: [ProviderItemComponent],
  imports: [CommonModule, ProviderItemRoutingModule],
  exports: [ProviderItemComponent]
})
export class ProviderItemModule {}
