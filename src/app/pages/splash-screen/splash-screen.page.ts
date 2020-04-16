import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  skip() {
    this.router.navigateByUrl('/home')
    this.storage.set('login', false)
  }

  loginWithFacebook() {
    this.authService.facebookLogin()
    this.storage.set('login', true)
  }

  loginWithGoogle() {
    this.authService.googleLogin()
  }
}
