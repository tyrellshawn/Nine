import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ChatService {
  user: firebase.User;
  chatMessages: any;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  private userPath = '/users';
  usersRef: AngularFireList<User> = null;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
  }

  getUser(): any {
    const email = this.user.email;

    const path = `/users/`;
    const valueRef = this.db.list(path, ref =>
      ref.orderByChild('email').equalTo(email)
    );

    return this.db.object(path);
  }

  getUsers(): Observable<User[]> {
    const path = '/users';
    return this.db.list(path).valueChanges();
  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();

    const email = this.user.email;
    console.log('Email is :' + email);
    const username = 'test name';
    console.log('Your Message is: ' + msg);
    const something = this.getUser();
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      userName: username,
      email: email
    });
  }

  getMessages(): AngularFireList<ChatMessage> {
    // query to create our message feed binding
    return this.db.list('messages');
  }
  getTextMessages(): Observable<ChatMessage[]> {
    return this.db.list('messages').valueChanges();
  }

  getTimeStamp() {
    const now = new Date();
    const date =
      now.getUTCFullYear() +
      '/' +
      (now.getUTCMonth() + 1) +
      '/' +
      now.getUTCDate();
    const time =
      now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();

    return date + ' ' + time;
  }
}
