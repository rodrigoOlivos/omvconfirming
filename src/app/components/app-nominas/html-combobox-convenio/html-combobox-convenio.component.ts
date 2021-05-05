import {Component} from '@angular/core';
import {OfflineServicesService} from '../../../services/offline-services.service';
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

  constructor(private formBuilder: FormBuilder, private offlineServicesService: OfflineServicesService) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // async orders
    of(offlineServicesService.getComboConvenio()).subscribe(orders => {
      this.orders = orders;
    });
  }

}
