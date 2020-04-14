import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    private googlePlus: GooglePlus,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  skip() {
    this.router.navigateByUrl('/home')
  }

  loginWithFacebook() {
    this.authService.facebookLogin()
  }

  loginWithGoogle() {
    // this.authService.googleLogin()

    this.googlePlus.login({
      'webClientId': '783043660458-cg1620a68ulhrevsc2ae1p8eh275ojg2.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        alert(res)
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then(success => {
            alert('login success')
          })
          .catch(err => {
            alert(JSON.stringify(err))
          })
      })
      .catch(err => {
        alert(JSON.stringify(err))
      })
  }
}
