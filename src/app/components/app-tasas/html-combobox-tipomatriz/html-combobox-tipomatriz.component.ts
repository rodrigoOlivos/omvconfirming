import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import {OfflineServicesService} from '../../../services/offline-services.service';


@Component({
  selector: 'app-html-combobox-tipomatriz',
  templateUrl: './html-combobox-tipomatriz.component.html',
  styleUrls: ['./html-combobox-tipomatriz.component.css']
})
export class HtmlComboboxTipomatrizComponent  {
  form: FormGroup;
  orders =  [{ id: '0', name: 'seleccione...' }];

  constructor(private formBuilder: FormBuilder, private offlineServicesService: OfflineServicesService ) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // async orders
    of(offlineServicesService.getComboTipoMatriz()).subscribe(orders => {
      this.orders = orders;
    });
  }
}

