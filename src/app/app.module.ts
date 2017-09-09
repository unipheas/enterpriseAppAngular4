import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyA6M4jHmUuwQO1tz_Lud0MHK4ydDY1W1MY',
  authDomain: 'pepper-e07b1.firebaseapp.com',
  databaseURL: 'https://pepper-e07b1.firebaseio.com',
  projectId: 'pepper-e07b1',
  storageBucket: '',
  messagingSenderId: '89721359338'
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
