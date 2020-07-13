import { Component, OnInit } from '@angular/core';

export class FileNode {
  children: FileNode[];
  fileName: string;
  type: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  description: string = '';
  name: string = '';
  country: string = '';
  game: string = '';

  constructor() {}

  ngOnInit() {}

  onChanged({ text, textName, textCountry, textGame }) {
    this.description = text;
    this.name = textName;
    this.country = textCountry;
    this.game = textGame;
  }
}
