import { Injectable } from '@angular/core';
import { auth } from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    
  ) { }

  loginWithSocialMedia(provider) {
    this.angularFireAuth.auth.signInWithPopup(provider)
    .then (
      () => {
        localStorage.setItem('uId', this.angularFireAuth.auth.currentUser.uid)
        this.router.navigateByUrl('/home');
    })
    .catch (
      (err) => {
        console.log(err)
      }
    )
  }

  googleLogin() {
    return this.loginWithSocialMedia(new auth.GoogleAuthProvider)
  }

  facebookLogin() {
    return this.loginWithSocialMedia(new auth.FacebookAuthProvider)
  }
}
