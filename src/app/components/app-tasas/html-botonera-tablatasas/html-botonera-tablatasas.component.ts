import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-html-botonera-tabla',
  templateUrl: './html-botonera-tablatasas.component.html',
  styleUrls: ['./html-botonera-tablatasas.component.css']
})
export class HtmlBotoneraTablatasasComponent implements OnInit {
  @Output()
  editCellEmitter: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  editCell = false;

  constructor() {
  }

  @Input()
  databaseData: any;

  ngOnInit(): void {
  }

  onSave(): void {
    this.onSubmitButton(false);
    this.editCell = false;
  }

  onEdit(): void {
    this.onSubmitButton(true);
    this.editCell = true;
  }

  onCancel(): void {
    this.onSubmitButton(false);
    this.editCell = false;
  }

  onSubmitButton(estado: boolean): void {
    this.editCellEmitter.emit(estado);
  }

}
