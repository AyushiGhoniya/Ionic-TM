import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderPage } from './loader.page';

@NgModule({
  declarations: [
    LoaderPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    LoaderPage
  ]
})
export class LoaderPageModule {}
