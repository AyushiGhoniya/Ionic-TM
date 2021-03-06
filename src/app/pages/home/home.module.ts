import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';
import { SideMenuPageModule } from 'src/app/pages/home/side-menu/side-menu.module';
import { CategoryPageModule } from './category/category.module';
import { StoryListPageModule } from './story-list/story-list.module';

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
    IonicModule,
    SideMenuPageModule,
    CategoryPageModule,
    StoryListPageModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule {}
