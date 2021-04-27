import {Component} from '@angular/core';
import {ComboClienteService} from '../../../services/combo-cliente.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from 'rxjs';

@Component({
  selector: 'app-html-combobox-cliente-nom',
  templateUrl: './html-combobox-cliente.component.html',
  styleUrls: ['./html-combobox-cliente.component.css']
})
export class HtmlComboboxClienteComponent {
  form: FormGroup;
  orders = [{id: '0', name: 'seleccione...'}];

  constructor(private formBuilder: FormBuilder, private comboUsuariosService: ComboClienteService) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // async orders
    of(comboUsuariosService.getComboMoneda()).subscribe(orders => {
      this.orders = orders;
    });
  }

}
