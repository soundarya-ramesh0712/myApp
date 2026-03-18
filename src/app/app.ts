import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // templateUrl: './app.html',
  template:`<h1>Hello world</h1>`,
  styleUrls:['./app.scss'],
  // styleUrl: './app.scss'
  imports: [RouterOutlet],
})
export class App {
  title='homes';
  // protected readonly title = signal('myApp');
}
