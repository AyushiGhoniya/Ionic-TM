import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideMenuPage } from './side-menu.page';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    SideMenuPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule
  ],
  exports: [
    SideMenuPage
  ]
})
export class SideMenuPageModule {}
