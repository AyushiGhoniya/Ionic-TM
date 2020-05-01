import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('noInternet', { static: false }) noInternet: ElementRef
  @ViewChild('rateUsHere', { static: false }) rateUsHere: ElementRef

  constructor(
    private router: Router,
    private network: Network,
    private platform: Platform,
    private renderer: Renderer2,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this.backButtonEvent()
      this.statusBar.backgroundColorByHexString('#517a9f');
    });
  }

  // when native back button is pressed
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.router.url === '/home') {  // current path is home
        if (window.confirm('Are you sure you want to exit?')) {  // user wants to exit app
          navigator['app'].exitApp();  // exit app
        }
      } else {  // current path is not home
        this.navCtrl.pop();  // navigate to previous screen
      }
    })
  }

  ngOnInit() {
    this.checkInternetConnectivity()
    this.checkRateUsHereVisibility()
  }

  // continuous internet connection checking
  checkInternetConnectivity() {
    this.network.onDisconnect().subscribe(() => {  // internet connection get disconnected
      this.renderer.addClass(this.noInternet.nativeElement, 'show')  // show no internet page
    })
    this.network.onConnect().subscribe(() => {  // internet connection is back
      this.renderer.removeClass(this.noInternet.nativeElement, 'show')  // hide no internet page
    })
  }

  // check if rate us here page to show or not
  checkRateUsHereVisibility() {
    this.userService.showRateUsHere.subscribe(data => {
      if (data === 'show') {
        this.renderer.addClass(this.rateUsHere.nativeElement, 'show') // show rate us here page
      } else {
        if (this.rateUsHere != null) {
          this.renderer.removeClass(this.rateUsHere.nativeElement, 'show') // hide rate us here page
        }
      }
    })
  }
}