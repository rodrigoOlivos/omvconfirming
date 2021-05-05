import {Component} from '@angular/core';
import {OfflineServicesService} from '../../../services/offline-services.service';
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

  constructor(private formBuilder: FormBuilder, private offlineServicesService: OfflineServicesService) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // async orders
    of(offlineServicesService.getComboCliente()).subscribe(orders => {
      this.orders = orders;
    });
  }

}
