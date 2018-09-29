import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
