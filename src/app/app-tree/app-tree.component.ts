import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeDataService } from '../service/tree-data.service';
import { TreeData } from '../service/tree-data.model';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { of as observableOf } from 'rxjs';

export class FileNode {
  children: FileNode[];
  fileName: string;
  type: any;
}

@Component({
  selector: 'app-app-tree',
  templateUrl: './app-tree.component.html',
  styleUrls: ['./app-tree.component.scss'],
})
export class AppTreeComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSource: MatTreeNestedDataSource<TreeData>;

  @Output() onChanged = new EventEmitter<{
    text: string;
    textName: string;
    textCountry: string;
    textGame: string;
  }>();

  change({ text, name, country, game }) {
    this.onChanged.emit({
      text,
      textName: name,
      textCountry: country,
      textGame: game,
    });
  }

  constructor(private dataService: TreeDataService) {}

  ngOnInit() {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataService._dataChange.subscribe(
      (data) => (this.nestedDataSource.data = data)
    );
  }

  private _getChildren = (node: TreeData) => observableOf(node.Children);
  hasNestedChild = (_: number, nodeData: TreeData) =>
    nodeData.Children.length > 0;

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = null;
    this.nestedDataSource.data = data;
  }
}
