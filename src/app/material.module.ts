import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,  MatGridListModule, MatInputModule,  
  MatButtonModule, MatSidenavModule, MatListModule,
  MatRippleModule, MatCardModule, MatTableModule,
  MatFormFieldModule, MatToolbarModule, MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCheckboxModule, MatGridListModule, MatInputModule,
    MatButtonModule, MatSidenavModule, MatListModule,
    MatRippleModule, MatCardModule, MatTableModule,
    MatFormFieldModule, MatToolbarModule, MatIconModule,
    BrowserAnimationsModule, 
  ],
  exports: [
    MatCheckboxModule, MatGridListModule, MatInputModule,
    MatButtonModule, MatSidenavModule, MatListModule,
    MatRippleModule, MatCardModule, MatTableModule,
    MatFormFieldModule, MatToolbarModule, MatIconModule,
    BrowserAnimationsModule, 
  ]
})
export class MaterialModule { }
