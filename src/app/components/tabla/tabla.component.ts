import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-test',
  styleUrls: ['./tabla.component.css'],
  templateUrl: './tabla.component.html',
})

export class TablaComponent {
  displayedColumns: string[] = ['position', 'name', 'email'];
  dataSource = ELEMENT_DATA;
}

export interface UserElement {
  name: string;
  position: number;
  email: string;
}

const ELEMENT_DATA: UserElement[] = [
  { position: 1, name: 'John', email: 'john@gmail.com' },
  { position: 2, name: 'Herry', email: 'herry@gmail.com' },
  { position: 3, name: 'Ann', email: 'ann@gmail.com' },
  { position: 4, name: 'Johnny', email: 'johnny@gmail.com' },
  { position: 5, name: 'Roy', email: 'roy@gmail.com' },
  { position: 6, name: 'Kia', email: 'kia@gmail.com' },
  { position: 7, name: 'Merry', email: 'merry@gmail.com' },
  { position: 8, name: 'William', email: 'william@gmail.com' },
  { position: 9, name: 'Shia', email: 'shia@gmail.com' },
  { position: 10, name: 'Kane', email: 'kane@gmail.com' }
];
