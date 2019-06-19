import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransferComponent } from './transfer.component';

const transferRoutes: Routes = [
  {path: '', component: TransferComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(transferRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransferRoutingModule { }
