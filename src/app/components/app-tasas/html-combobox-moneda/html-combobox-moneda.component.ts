import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {ComboMonedaService} from '../../../services/combo-moneda.service';
import { NgxDatatableTasasComponent } from '../ngx-datatable-tasas/ngx-datatable-tasas.component';

@Component({
  selector: 'app-html-combobox-moneda',
  templateUrl: './html-combobox-moneda.component.html',
  styleUrls: ['./html-combobox-moneda.component.css']
})
export class HtmlComboboxMonedaComponent {



  @Output()
  monedaEmitter: EventEmitter<string> = new EventEmitter<string>( false);
  monedaSelect = '1';
  form: FormGroup;
  orders = [{idMoneda: '0', moneda: 'seleccione...'}];


  constructor(private formBuilder: FormBuilder, private comboMonedaService: ComboMonedaService) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    comboMonedaService.getComboMonedaHttp().subscribe(data => {
        this.orders = data.arrayOfMoneda.rowMoneda;

      },
      err => {
        console.log(err);
        // @ts-ignore
        $('#sesionInvalida').modal('show');
      }
    );
  }

  onChange(value: string): void{
    this.monedaSelect = value;
    this.onSubmit(value);

  }

  onSubmit(value: string): void{
    this.comboMonedaService.sendMoneda();
    this.monedaEmitter.emit(value);
  }
}
