import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IntroductionScreenPage } from './introduction-screen.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IntroductionScreenPage
  }
];

@NgModule({
  declarations: [
    IntroductionScreenPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class IntroductionScreenPageModule {}
