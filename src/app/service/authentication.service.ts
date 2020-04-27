import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';
import { UserService } from 'src/app/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private googlePlus: GooglePlus,
    private userService: UserService
  ) { }

  googleLogin() {

    this.googlePlus.login({
      'webClientId': '1077237492199-bmga3td66gkh91vdflkanid7n4o46a5v.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then(() => {
            this.userService.addUserDetails()
          })
      })
  }
  
}
