import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { NoInternetPage } from './pages/no-internet/no-internet.page';

@NgModule({
  declarations: [
    AppComponent,
    NoInternetPage
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }