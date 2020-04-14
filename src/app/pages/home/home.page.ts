import { Component, OnInit } from '@angular/core';
import { menuController } from '@ionic/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userName: string;
  email: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
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
}
