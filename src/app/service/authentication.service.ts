import { Injectable } from '@angular/core';
import { auth } from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { UserService } from 'src/app/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private googlePlus: GooglePlus,
    private angularFireAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
    private storage: Storage
  ) { }

  googleLogin() {
    return this.loginWithSocialMedia(new auth.GoogleAuthProvider)

    // this.googlePlus.login({
    //   'webClientId': '783043660458-cg1620a68ulhrevsc2ae1p8eh275ojg2.apps.googleusercontent.com',
    //   'offline': true
    // })
    //   .then(res => {
    //     alert(res)
    //     firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
    //       .then(success => {
    //         alert('login success')
    //       })
    //       .catch(err => {
    //         alert(JSON.stringify(err))
    //       })
    //   })
    //   .catch(err => {
    //     alert(JSON.stringify(err))
    //   })

    // this.googlePlus.login({
    //   'webClientId': '1077237492199-bmga3td66gkh91vdflkanid7n4o46a5v.apps.googleusercontent.com',
    //   'offline': true
    // })
    //   .then(res => {
    //     firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
    //       .then(() => {
    //         this.userService.addUserDetails()
    //       })
    //   })
  }

  facebookLogin() {
    return this.loginWithSocialMedia(new auth.FacebookAuthProvider)
  }

  loginWithSocialMedia(provider) {
    this.angularFireAuth.auth.signInWithPopup(provider)
    .then (
      () => {
        this.storage.set('uId', this.angularFireAuth.auth.currentUser.uid);
        this.router.navigateByUrl('/home');
    })
    .catch (
      (err) => {
        console.log(err)
      }
    )
  }

  
}
