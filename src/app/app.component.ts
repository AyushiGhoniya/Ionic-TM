import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform, NavController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('noInternet', { static: false }) noInternet: ElementRef

  constructor(
    private router: Router,
    private network: Network,
    private platform: Platform,
    private renderer: Renderer2,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private splashScreen: SplashScreen,
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

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.router.url === '/home') {
        if (window.confirm('Are you sure you want to exit?')) {
          navigator['app'].exitApp();
        }
      } else {
        this.navCtrl.pop();
      }
    })
  }

  ngOnInit() {
    this.checkInternetConnectivity()
  }

  checkInternetConnectivity() {
    this.network.onDisconnect().subscribe(() => {
      this.renderer.addClass(this.noInternet.nativeElement, 'show')
    })
    this.network.onConnect().subscribe(() => {
      this.renderer.removeClass(this.noInternet.nativeElement, 'show')
    })
  }
}