import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from 'rxjs';
import {ComboMonedaService} from '../../../services/combo-moneda.service';


@Component({
  selector: 'app-html-combobox-moneda',
  templateUrl: './html-combobox-moneda.component.html',
  styleUrls: ['./html-combobox-moneda.component.css']
})
export class HtmlComboboxMonedaComponent {
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
      }
    );

  }
}
