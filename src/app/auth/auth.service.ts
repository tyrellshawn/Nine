import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit, OnDestroy {
  token: string;
  role: string;
  userSubscription: Subscription;
  private authStatus = 'signUp';
  authStatusSubscription = new Subject<string>();
  authenticationStateSubscription = new Subject<Boolean>();

  constructor(private firebaseAuth: AngularFireAuth,
              private firebaseDatabase: AngularFireDatabase,
              private router: Router) {
                this.firebaseAuth.auth.onAuthStateChanged(user => {
                  if (user) {
                    // User is signed in.
                    console.log("User is signed in");
                    console.log(user);
                    this.token = user.refreshToken;
                  } else {
                    // User is signed out.
                    console.log("User is NOT signed in");
                  }
                  this.authStatusSubscription.next(this.token);
                  this.authenticationStateSubscription.next(this.isAuthenticated());
                });
              }

  ngOnInit() {
  }

  toggleStatus() {
    console.log('Old status is -->', this.authStatus);
    if (this.authStatus === 'signUp' || !this.authStatus) {
      this.authStatus = 'signIn';
    } else {
      this.authStatus = 'signUp';
    }
    console.log('New status is --> ', this.authStatus);
    this.authStatusSubscription.next(this.authStatus);
  }


  signupUserWithEmail(email: string, password: string, firstname: string, lastname: string, phoneNumber: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(
    (user) => {
      this.firebaseDatabase.database.ref('/users').push({email, firstname, lastname, phoneNumber});
      this.router.navigate(['/signin']);
      // this.loginUserWithEmail(email, password);
    })
    .catch(
      error => console.error('An error occured when signining up the user.')
    );
  }

  loginUserWithEmail(email, password) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          console.log(this.firebaseAuth.auth.currentUser);
          this.firebaseAuth.auth.currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                console.log('Authenticated: ' + this.isAuthenticated());
              }
            );
        }
      )
      .catch(
        error => console.error(error)
      );
  }

  logoutUser() {
    this.firebaseAuth.auth.signOut();
    this.token = null;
    this.role = null;
  }

  getToken() {
    /** Returns a promise */
    this.firebaseAuth.auth.currentUser.getIdToken().then(
      (token: string) => {
        this.token = token;
      }
    );
    return this.token;
  }

  isAuthenticated() {
    // this.token = !this.token ? this.firebaseAuth.auth.currentUser ? this.getToken() : this.token : this.token;
    return !!this.token;
  }

  ngOnDestroy() {
    // this.userSubscription.unsubscribe();
  }

}
