import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-botonera-tabla',
  templateUrl: './html-botonera-tablatasas.component.html',
  styleUrls: ['./html-botonera-tablatasas.component.css']
})
export class HtmlBotoneraTablatasasComponent implements OnInit {
  public editCell = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSave(): void{
    this.editCell = false;
  }
  onEdit(): void{
    this.editCell = true;
  }
  onCancel(): void{
    this.editCell = false;
  }
}
