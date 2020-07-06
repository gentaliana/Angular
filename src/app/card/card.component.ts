import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() index: number;

  title: string = 'My card Title';

  text: string = 'My simple text';
  cardDate: Date = new Date();

  textColor: string;
  ngOnInit() {}

  changeTitle() {
    this.card.title = 'This title has been changed!';
  }
  onInput(value) {
    // const value = event.target.value;
    this.title = value;
  }
  chageHadler() {
    console.log(this.title);
  }
}
