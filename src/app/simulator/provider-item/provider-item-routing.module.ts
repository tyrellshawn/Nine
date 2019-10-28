import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProviderItemComponent } from './provider-item.component';

const chatRoutes: Routes = [{ path: '', component: ProviderItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class ProviderItemRoutingModule {}
