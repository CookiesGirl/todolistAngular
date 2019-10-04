import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <header id="header">
  <img src="assets/rubik.png" alt="logo" />
    <h1 class="app-title"> {{ title }} </h1>
  </header>

<app-list-manager></app-list-manager>

<div id="footer">2019 - copyright Audrey Diemer !</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List APP';
}

