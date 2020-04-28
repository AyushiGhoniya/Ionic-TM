import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { NoInternetPageModule } from './pages/no-internet/no-internet.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    NoInternetPageModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }