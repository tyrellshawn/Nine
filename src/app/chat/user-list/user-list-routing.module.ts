import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list.component';

const chatRoutes: Routes = [{ path: '', component: UserListComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class UserListRoutingModule {}
