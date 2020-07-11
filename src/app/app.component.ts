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

  constructor() {}

  ngOnInit() {}

  onChanged({ text, textName }) {
    console.log({ textName });
    console.log({ text });

    this.description = text;
    this.name = textName;
  }
}
