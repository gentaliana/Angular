import { TreeData } from './tree-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  _dataChange = new BehaviorSubject<TreeData[]>([
    {
      Id: 1,
      Name: 'John 1',
      Description: 'John 1',
      Country: 'USA',
      Game: 'World of Warcraft',
      Children: [
        {
          Id: 3,
          Name: 'Ken 1',
          Description: 'Ken 1',
          Country: 'Russia',
          Game: 'Dota 2',
          Children: [],
        },
        {
          Id: 4,
          Name: 'Ken 2',
          Description: 'Ken 2',
          Country: 'Austria',
          Game: 'Counter-Strike: Global Offensive',
          Children: [
            {
              Id: 5,
              Name: 'Awesome 1',
              Description: 'Awesome 1',
              Country: 'Bangladesh',
              Game: 'Hearthstone',
              Children: [],
            },
          ],
        },
      ],
    },
    {
      Id: 2,
      Name: 'John 2',
      Description: 'John 2',
      Country: 'Botswana',
      Game: 'League of Legends',
      Children: [
        {
          Id: 6,
          Name: 'Ken 3',
          Description: 'Ken 3',
          Country: 'Cambodia',
          Game: 'Divinity: Original Sin 2',
          Children: [],
        },
      ],
    },
  ]);
}
