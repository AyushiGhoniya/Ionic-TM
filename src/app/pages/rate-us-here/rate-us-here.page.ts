import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-rate-us-here',
  templateUrl: './rate-us-here.page.html',
  styleUrls: ['./rate-us-here.page.scss'],
})
export class RateUsHerePage implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private inAppBrowser: InAppBrowser
  ) { }

  ngOnInit() {
  }

  hideRateUs() {
    this.userService.showRateUsHere.next('hide')
  }

  navigateToPlayStore() {
    this.hideRateUs()
    let browser = this.inAppBrowser.create('https://play.google.com/store')
    browser.show()
  }

  navigateToFeedBack() {
    this.hideRateUs()
    this.router.navigateByUrl('feedback')
  }

}