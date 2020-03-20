import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPage } from './post.page';
import { Routes, RouterModule } from '@angular/router';
import { LoaderPageModule } from 'src/app/core/loader/loader.module';

const routes: Routes = [
  {
    path: '',
    component: PostPage
  }
];

@NgModule({
  declarations: [
    PostPage
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
  ]

})
export class PostPageModule {}
