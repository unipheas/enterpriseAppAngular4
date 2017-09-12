import { FirebaseApp } from 'angularfire2';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cuisines;

  constructor(firebase: FirebaseApp) {
    const ref = firebase.database().ref();
    this.cuisines = ref;
    console.log(ref);
  }
}
