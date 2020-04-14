import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  userName: string;

  menuItems = [
    {
      icon: 'home-outline', label: 'Home', click: this.navigateToHome
    },
    {
      icon: 'person-outline', label: 'Your Profile', click: this.navigateToProfile
    },
    {
      icon: 'chatbubbles-outline', label: 'Your Story', click: this.navigateToYourStory
    },
    {
      icon: 'information-circle-outline', label: 'About', click: this.navigateToAbout
    },
    {
      icon: 'share-social-outline', label: 'Tell your friend', click: this.navigateToShare
    },
    {
      icon: 'bulb-outline', label: 'Feedback', click: this.navigateToFeedback
    },
    {
      icon: 'star-outline', label: 'Rate us here', click: this.navigateToRateUsHere
    },
    {
      icon: 'help-circle-outline', label: 'Help', click: this.navigateToHelp
    },
    {
      icon: 'power-outline', label: 'Logout', click: this.logout
    },
  ];

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(user => {
      // console.log(user)
      this.userName = user.displayName
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

  navigateToShare() {

  }

  navigateToFeedback() {

  }

  navigateToRateUsHere() {

  }

  navigateToHelp() {

  }

  logout() {

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
