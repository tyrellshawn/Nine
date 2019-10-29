import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderItemComponent } from './provider-item.component';
import { ProviderItemRoutingModule } from './provider-item-routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ProviderItemComponent],
  imports: [CommonModule, ProviderItemRoutingModule, MaterialModule],
  exports: [ProviderItemComponent]
})
export class ProviderItemModule {}
