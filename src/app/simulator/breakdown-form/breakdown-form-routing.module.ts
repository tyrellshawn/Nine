import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreakdownFormComponent } from './breakdown-form.component';

const chatRoutes: Routes = [{ path: '', component: BreakdownFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class BreakdownFormRoutingModule {}
