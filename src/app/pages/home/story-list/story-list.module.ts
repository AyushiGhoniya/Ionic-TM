import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StoryListPage } from './story-list.page';
import { LoaderPageModule } from 'src/app/core/loader/loader.module';

@NgModule({
  declarations: [
    StoryListPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    LoaderPageModule
  ],
  exports: [
    StoryListPage
  ]
})
export class StoryListPageModule {}
