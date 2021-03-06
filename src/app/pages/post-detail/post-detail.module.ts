import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostDetailPage } from './post-detail.page';
import { Routes, RouterModule } from '@angular/router';
import { LoaderPageModule } from 'src/app/core/loader/loader.module';

const routes: Routes = [
  {
    path: '',
    component: PostDetailPage
  }
];

@NgModule({
  declarations: [
    PostDetailPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    LoaderPageModule,
    RouterModule.forChild(routes)
  ]
})
export class PostDetailPageModule {}
