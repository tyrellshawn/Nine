import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryItemComponent } from './country-item.component';
import { CountryItemRoutingModule } from './country-item-routing.module';

@NgModule({
  declarations: [CountryItemComponent],
  imports: [CommonModule, CountryItemRoutingModule],
  exports: [CountryItemComponent]
})
export class CountryItemModule {}
