import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.checkFirstTime()  // after 4s check whether app is opened first time or not
    }, 4000);
  }

  checkFirstTime() {
    this.storage.get('firstTime').then(val => {
      if (val === null) {  // app is open for first time
        this.storage.set('firstTime', 'no')
        this.router.navigateByUrl('/introduction')
      } else {  // app is not open for first time
        this.storage.set('firstTime', 'no')
        this.router.navigateByUrl('/home')
      }
      
    })
  }
}
