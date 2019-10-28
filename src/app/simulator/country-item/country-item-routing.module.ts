import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryItemComponent } from './country-item.component';

const chatRoutes: Routes = [{ path: '', component: CountryItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class CountryItemRoutingModule {}
