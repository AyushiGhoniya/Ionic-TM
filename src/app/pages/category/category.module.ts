import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category.page';
import { Routes, RouterModule } from '@angular/router';
import { LoaderPageModule } from 'src/app/core/loader/loader.module';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage
  }
];

@NgModule({
  declarations: [
    CategoryPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPageModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class CategoryPageModule {}
