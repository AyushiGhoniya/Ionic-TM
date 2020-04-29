import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoaderPage } from './loader.page';

@NgModule({
  declarations: [
    LoaderPage
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    LoaderPage
  ]
})
export class LoaderPageModule { }
