export interface TreeData {
  Id: number;
  Name: string;
  Description: string;
  Country: string;
  Game: string;
  Children: TreeData[];
}

export interface DialogData {
  Name: string;
  Description: string;
  Component: string;
}
