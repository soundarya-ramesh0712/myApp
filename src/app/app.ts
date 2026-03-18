import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // templateUrl: './app.html',
  template:`
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">contact</a>
  </nav>
  <router-outlet></router-outlet>
  <h1>Hello world</h1>
  <p>Welcome to my angular app</p>
  <p>Currently I am doing intership at <b>"Black I technologies and solutions"</b></p>
  <p>I am learning Angular</p>`,
  styleUrls:['./app.scss'],
  // styleUrl: './app.scss'
  imports: [RouterOutlet],
})
export class App {
  title='homes';
  // protected readonly title = signal('myApp');
}
