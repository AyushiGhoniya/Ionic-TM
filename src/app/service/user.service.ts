import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  showRateUsHere = new BehaviorSubject('')

  constructor(
    private router: Router,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  // add user details to firebase database
  addUserDetails(path: string) {
    this.angularFireDatabase.object('/' + 'users/' + firebase.auth().currentUser.uid + '/userdetails').set({
      email: firebase.auth().currentUser.email,
    })
    this.router.navigateByUrl(path)
  }
}