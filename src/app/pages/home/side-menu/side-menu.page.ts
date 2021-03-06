import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { ShareService } from 'src/app/service/share.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  user: firebase.User;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private storage: Storage,
    private shareService: ShareService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  // get current logged in user from firebase auth
  getCurrentUser() {
    this.angularFireAuth.authState.subscribe(value => {
      this.user = value;
    })
  }

  navigateToProfile() {
    this.router.navigateByUrl('/profile');
  }

  navigateToYourStory() {
    this.router.navigateByUrl('/addpost');
  }

  // share app on different platforms
  shareApp() {
    this.shareService.options = {
      message: 'Share ThanksMummy',
      subject: '',
      files: '',
      url: 'https://play.google.com/store',
      chooserTitle: ''
    }
    this.shareService.share()
  }

  navigateToRateUsHere() {
    this.userService.showRateUsHere.next('show');
  }

  navigateToFeedback() {
    this.router.navigateByUrl('/feedback');
  }

  navigateToPrivacyPolicy() {
    this.router.navigateByUrl('/privacy-policy')
  }

  navigateToAboutUs() {
    this.router.navigateByUrl('/about');
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.storage.remove('uId');
    });
  }
}
