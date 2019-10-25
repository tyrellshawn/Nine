import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserItemComponent } from './user-item.component';

const chatRoutes: Routes = [{ path: '', component: UserItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class UserItemRoutingModule {}
