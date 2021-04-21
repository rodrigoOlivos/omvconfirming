import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-in-line',
  templateUrl: './ngx-datatable.component.html'
})
export class InlineEditComponent {
  editing: any = {};
  rows: any[] = [];

  ColumnMode = ColumnMode;
  columns: any;

  constructor() {
    this.rows = [{ name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' }
    ];
    this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  }
  updateValue(event: any, cell: any, rowIndex: any): void {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
}
