import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: firebase.User;
  enableNotifications = true;

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(value => {
      this.user = value;
    })
  }

  // calling google login method from authentication service
  loginWithGoogle() {
    this.authenticationService.nativeGoogleLogin('profile')
  }

  // skip login for now is pressed
  navigateToHome() {
    this.router.navigateByUrl('home');
  }

  editProfile() {
    console.log('edit profile')
  }

  toggleNotifications() {
    if (this.enableNotifications) {
      // this.toastCtrl.create('Notifications enabled.');
      alert('enabled')
    } else {
      // this.toastCtrl.create('Notifications disabled.');
      alert('disabled')
    }
  }

  logOut() {
    this.authenticationService.logout();
  }

}
