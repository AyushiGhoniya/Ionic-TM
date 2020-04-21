import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: firebase.User;
  enableNotifications = true;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(value => {
      this.user = value;
    })
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
    firebase.auth().signOut().then(() => {
      if(window.confirm('Are you sure?')) {
        this.storage.remove('uId');
      }
    });
  }

}
