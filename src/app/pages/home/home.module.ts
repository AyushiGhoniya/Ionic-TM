import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';
import { LoaderPageModule } from 'src/app/core/loader/loader.module';
import { SideMenuPageModule } from 'src/app/core/side-menu/side-menu.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPageModule,
    SideMenuPageModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageModule {}
