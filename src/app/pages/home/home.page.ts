import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { menuController } from '@ionic/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input('header') header:any;

  userName: string;
  email: string;
  lastX:any;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.angularFireAuth.authState.subscribe(user => {
    //   console.log(user)
    //   this.userName = user.displayName
    //   this.email = user.email
    //   console.log('name :: ' + this.userName + ', email :: ' + this.email)
    // })
  }

  openMenu() {
    menuController.open();
  }

  logScrolling(event) {
    if(event.detail.scrollTop > Math.max(0, this.lastX)) {

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
