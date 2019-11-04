import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subscription, Subject, Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { NotificationService } from '../services/notification.service';

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
  private authState: any;
  private user: Observable<firebase.User>;
  private email: string;

  // TODO: Improve authentication so experience is seamless
  constructor(
    private firebaseAuth: AngularFireAuth,
    private firebaseDatabase: AngularFireDatabase,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in and email has been verified

        if (user.emailVerified){
          console.log('User is signed in');
          console.log(user);
          this.token = user.refreshToken;
          this.user = firebaseAuth.authState;

          this.email = user.email;
          console.log('The User email is: ' + this.email);
        } else {
          console.log("User has not verified email.");
          this.notificationService.notification$.next('User has not verified email.');
        }
        
      } else {
        // User is signed out.
        console.log('User is NOT signed in');
      }
      this.authStatusSubscription.next(this.token);
      this.authenticationStateSubscription.next(this.isAuthenticated());
    });
  }

  ngOnInit() {}

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

  signupUserWithEmail(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    phoneNumber: string
  ) {
    this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.firebaseDatabase.database
          .ref('/users')
          .push({ email, firstname, lastname, phoneNumber });
        this.firebaseAuth.auth.currentUser.sendEmailVerification();
        this.router.navigate(['/signin']);
        // this.loginUserWithEmail(email, password);
      })
      .catch(error =>
        console.error('An error occured when signining up the user.')
      );
  }

  loginUserWithEmail(email, password) {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const currentUser = this.firebaseAuth.auth.currentUser;
        if(currentUser.emailVerified){
          this.authState = response;
          this.router.navigate(['/']);
          currentUser
            .getIdToken()
            .then((token: string) => {
              this.token = token;
              console.log('Authenticated: ' + this.isAuthenticated());
            });
        } else{
          console.log("Please verify your email!");
          this.notificationService.notification$.next('User has not verified email.');
        }
      })
      .catch(error => console.error(error));
  }

  logoutUser() {
    this.firebaseAuth.auth.signOut();
    this.token = null;
    this.role = null;
    this.email = null;
  }

  getToken() {
    /** Returns a promise */
    this.firebaseAuth.auth.currentUser.getIdToken().then((token: string) => {
      this.token = token;
    });
    return this.token;
  }
  authUser() {
    return this.user;
  }
  get currentUserEmail(): string {
    return this.authState !== null ? this.email : '';
  }

  isAuthenticated() {
    // this.token = !this.token ? this.firebaseAuth.auth.currentUser ? this.getToken() : this.token : this.token;
    return !!this.token;
  }

  ngOnDestroy() {
    // this.userSubscription.unsubscribe();
  }
  registerPaystack() {}
}
