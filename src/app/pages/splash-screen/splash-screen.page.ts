import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
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
    this.authService.googleLogin()
  }
}
