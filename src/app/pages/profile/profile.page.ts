import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userName: string;
  enableNotifications = true;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(user => {
      console.log(user)
      this.userName = user.displayName
    })
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
    if(window.confirm('Are you sure?')) {
      localStorage.removeItem('uId');
      this.router.navigateByUrl('/splashscreen');
    }
  }

}
