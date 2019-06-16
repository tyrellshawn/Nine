import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IOUComponent } from './iou.component';
import { IOURoutingModule } from './ioul-routing.module';

@NgModule({
  declarations: [
    IOUComponent,
  ],
  imports: [
    CommonModule,
    IOURoutingModule
  ]
})
export class IOUModule { }