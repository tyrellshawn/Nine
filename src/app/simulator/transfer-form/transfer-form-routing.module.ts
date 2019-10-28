import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransferFormComponent } from './transfer-form.component';

const chatRoutes: Routes = [{ path: '', component: TransferFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class TransferFormRoutingModule {}
