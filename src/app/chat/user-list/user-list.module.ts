import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserItemModule } from '../user-item/user-item.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserListRoutingModule, UserItemModule],
  exports: [UserListComponent]
})
export class UserListModule {}
