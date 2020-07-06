import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app-test';
  togle = true;
  cards: Card[] = [
    { title: 'Card 1', text: 'This is Card 1' },
    { title: 'Card 2', text: 'This is Card 2' },
    { title: 'Last Card', text: 'This is Card 3' }
  ];

  toggleCards(){
    this.togle = !this.togle;
  }
}
