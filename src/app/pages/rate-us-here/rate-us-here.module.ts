import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RateUsHerePage } from './rate-us-here.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RateUsHerePage
  }
];

@NgModule({
  declarations: [
    RateUsHerePage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
})
export class RateUsHerePageModule {}
