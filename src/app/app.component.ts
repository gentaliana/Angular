import { TreeDataService } from './service/tree-data.service';
import { TreeData } from './service/tree-data.model';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { of as observableOf } from 'rxjs';


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

  nestedTreeControl: NestedTreeControl<TreeData>;
  nestedDataSource: MatTreeNestedDataSource<TreeData>;

  constructor(
    private dataService: TreeDataService
  ) {}

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
