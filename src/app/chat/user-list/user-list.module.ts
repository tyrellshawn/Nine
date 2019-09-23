import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserListRoutingModule],
  exports: [UserListComponent]
})
export class UserListModule {}
