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
      Children: [
        {
          Id: 3,
          Name: 'Ken 1',
          Description: 'Ken 1',
          Children: [],
        },
        {
          Id: 4,
          Name: 'Ken 2',
          Description: 'Ken 2',
          Children: [
            {
              Id: 5,
              Name: 'Awesome 1',
              Description: 'Awesome 1',
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
      Children: [
        {
          Id: 6,
          Name: 'Ken 3',
          Description: 'Ken 3',
          Children: [],
        },
      ],
    },
  ]);
}
