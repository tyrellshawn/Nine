import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProviderListComponent } from './provider-list.component';

const chatRoutes: Routes = [{ path: '', component: ProviderListComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class ProviderListRoutingModule {}
