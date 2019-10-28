import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferFormComponent } from './transfer-form.component';
import { TransferFormRoutingModule } from './transfer-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [TransferFormComponent],
  imports: [
    CommonModule,
    TransferFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [TransferFormComponent]
})
export class TransferFormModule {}
