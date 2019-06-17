import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule, MatInputModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule, MatInputModule
  ]
})
export class MaterialModule { }
