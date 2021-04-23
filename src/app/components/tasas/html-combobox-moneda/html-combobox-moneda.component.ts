import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import {ComboMonedaService} from '../../../services/combo-moneda.service';


@Component({
  selector: 'app-html-combobox-moneda',
  templateUrl: './html-combobox-moneda.component.html',
  styleUrls: ['./html-combobox-moneda.component.css']
})
export class HtmlComboboxMonedaComponent {
  form: FormGroup;
  orders =  [{ id: '0', name: 'seleccione...' }];

  constructor(private formBuilder: FormBuilder, private comboMonedaService: ComboMonedaService ) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // async orders
    of(comboMonedaService.getComboMoneda()).subscribe(orders => {
      this.orders = orders;
    });
  }
}
