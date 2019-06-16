import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IOUComponent } from './iou.component';

const IOURoutes: Routes = [
  {path: '', component: IOUComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(IOURoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IOURoutingModule { }
