import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.transferForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      amount: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  onTransfer() {
    console.log("Transfering...");
  }
}
