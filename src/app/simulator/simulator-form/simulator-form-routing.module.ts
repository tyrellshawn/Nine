import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimulatorFormComponent } from './simulator-form.component';

const chatRoutes: Routes = [{ path: '', component: SimulatorFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule]
})
export class SimulatorFormRoutingModule {}
