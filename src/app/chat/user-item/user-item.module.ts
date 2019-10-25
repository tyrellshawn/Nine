import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserItemComponent } from './user-item.component';
import { UserItemRoutingModule } from './user-item-routing.module';

@NgModule({
  declarations: [UserItemComponent],
  imports: [CommonModule, UserItemRoutingModule],
  exports: [UserItemComponent]
})
export class UserItemModule {}
