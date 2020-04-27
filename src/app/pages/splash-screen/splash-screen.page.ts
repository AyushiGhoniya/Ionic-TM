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
      this.checkFirstTime()
    }, 4000);
  }

  checkFirstTime() {
    this.storage.get('firstTime').then(val => {
      if (val === null) {
        this.storage.set('firstTime', 'no')
        this.router.navigateByUrl('/introduction')
      } else {
        this.storage.set('firstTime', 'no')
        this.router.navigateByUrl('/home')
      }
      
    })
  }
}
