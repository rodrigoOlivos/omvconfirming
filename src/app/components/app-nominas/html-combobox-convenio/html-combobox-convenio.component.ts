import {Component} from '@angular/core';
import {ComboConvenioService} from '../../../services/combo-convenio.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from 'rxjs';

@Component({
  selector: 'app-html-combobox-convenio-nom',
  templateUrl: './html-combobox-convenio.component.html',
  styleUrls: ['./html-combobox-convenio.component.css']
})
export class HtmlComboboxConvenioComponent {
  form: FormGroup;
  orders = [{id: '0', name: 'seleccione...'}];

  constructor(private formBuilder: FormBuilder, private comboConvenioService: ComboConvenioService) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // async orders
    of(comboConvenioService.getComboMoneda()).subscribe(orders => {
      this.orders = orders;
    });
  }

}
