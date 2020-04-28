import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { menuController } from '@ionic/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input('header') header: any;

  userName: string;
  email: string;
  lastX: any;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private renderer: Renderer2,
    private platform: Platform,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.router.url === '/home') {
        if (window.confirm('Are you sure you want to exit?')) {
          navigator['app'].exitApp();
        }
      } else {
        this.navCtrl.pop()
      }
    })
  }

  openMenu() {
    menuController.open();
  }

  logScrolling(event) {
    if (event.detail.scrollTop > Math.max(0, this.lastX)) {

      this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

    } else {

      this.renderer.setStyle(this.header, 'margin-top', '0');
      this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms');

    }

    this.lastX = event.detail.scrollTop;
  }

  scrollStart(header) {
    this.header = header.el;
  }
}
