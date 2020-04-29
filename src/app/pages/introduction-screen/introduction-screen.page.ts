import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction-screen',
  templateUrl: './introduction-screen.page.html',
  styleUrls: ['./introduction-screen.page.scss'],
})
export class IntroductionScreenPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  skip() {
    this.router.navigateByUrl('/home')
  }

  loginWithGoogle() {
    this.authService.nativeGoogleLogin()
  }

}
