import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'firstname': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'phoneNumber': new FormControl('', [Validators.required, Validators.minLength(6)]),
      
    });
  }

  onSignUp() {
    console.log('On signup clicked');
    console.log('Sign up form --->', this.signUpForm);

    this.authService.signupUserWithEmail( 
        this.signUpForm.value.email, 
        this.signUpForm.value.password, 
        this.signUpForm.value.firstname,
        this.signUpForm.value.lastname,
        this.signUpForm.value.phoneNumber,);
  }

}
