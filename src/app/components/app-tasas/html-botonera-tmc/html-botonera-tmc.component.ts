import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-html-botonera-tmc',
  templateUrl: './html-botonera-tmc.component.html',
  styleUrls: ['./html-botonera-tmc.component.css']
})
export class HtmlBotoneraTmcComponent implements OnInit {
  @Output()
  editCellEmitter: EventEmitter<boolean> = new EventEmitter<boolean>( false);
  editCell = false;
  constructor() { }
  @Input()
  databaseData: any;
  ngOnInit(): void {
  }
  onSave(): void{
    this.onSubmitButton(false);
    this.editCell = false;
  }
  onEdit(): void{
    this.onSubmitButton(true);
    this.editCell = true;
  }
  onCancel(): void{
    this.onSubmitButton(false);
    this.editCell = false;
  }
  onSubmitButton(estado: boolean): void{
    this.editCellEmitter.emit(estado);
  }
}
