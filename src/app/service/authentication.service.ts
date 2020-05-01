import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private googlePlus: GooglePlus,
    private userService: UserService,
    private storage: Storage
  ) { }

  // login with google using firebase
  async nativeGoogleLogin(path: string) {
    this.googlePlus.login({
      'webClientId': '783043660458-cg1620a68ulhrevsc2ae1p8eh275ojg2.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then(() => {
            this.userService.addUserDetails(path)
          })
      })
  }

  // logout user from firebase
  logout() {
    if (confirm('Are you sure you want to logout?')) {
      firebase.auth().signOut()
        .then(() => { 
          this.storage.remove('uId');
        })
        .catch(err => { })
    }
  }
}
