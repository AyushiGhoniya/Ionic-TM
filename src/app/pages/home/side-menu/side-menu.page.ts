import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';

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
    private storage: Storage
  ) { }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(value => {
      this.user = value;
      console.log(this.user);
    })
  }

  navigateToHome() {

  }

  navigateToProfile() {

  }

  navigateToYourStory() {

  }

  navigateToAbout() {

  }

  shareApp() {

  }

  navigateToFeedback() {

  }

  navigateToRateUsHere() {

  }

  navigateToHelp() {

  }

  logout() {
    firebase.auth().signOut().then(() => {
      console.log('logout');
      this.storage.remove('uId');
    });
  }

  navigateToLink(path: string) {
    if (path == 'home') {
      this.router.navigateByUrl('/home')
    }
    else {
      this.router.navigate(['/post', path])
    }
  }
}
