import { Component, ViewChild } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];
@Component({
  selector: 'app-table-editor',
  templateUrl: './tabla-editing-example.component.html',
  styleUrls: ['./tabla-editing-example.component.html'],

})
export class TableEditComponent {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, {static: true }) table?: MatTable<any>;

  constructor(public dialog: MatDialog) {}


  openDialog( action: any , obj: any ): void{
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add'){
        this.addRowData(result.data);
      }else if (result.event === 'Update'){
        this.updateRowData(result.data);
      }else if (result.event === 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  addRowData(rowObj: any): void{
    const d = new Date();
    this.dataSource.push({
      id: d.getTime(),
      name: rowObj?.name
    });
    this.table?.renderRows();

  }
  updateRowData(rowObj: any): void{
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id === rowObj.id){
        value.name = rowObj.name;
      }
      return true;
    });
  }
  deleteRowData(rowObj: any): void{
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id !== rowObj.id;
    });
  }
}
