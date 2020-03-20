import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  userName: string;

  constructor(
    private menu: MenuController,
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(user => {
      console.log(user)
      this.userName = user.displayName
    })
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  navigateToLink(path: string) {
    if(path == 'home') {
      this.router.navigateByUrl('/home')
    }
    else {
    this.router.navigate(['/post', path])
    }
  }
}
