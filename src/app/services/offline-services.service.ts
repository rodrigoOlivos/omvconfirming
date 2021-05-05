import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfflineServicesService {

  constructor() {
  }

  getComboTipoMatriz(): any {
    return [
      {id: '0', name: 'Seleccione...'},
      {id: '12', name: 'Costo Fondo'},
      {id: '13', name: 'Comprador'},
      {id: '14', name: 'Proveedor'},
      {id: '11', name: 'TMC'},
      {id: '16', name: 'Comisiones'},
      {id: '17', name: 'Gastos'}
    ];
  }

  getComboCliente(): any {
    return [
      {id: '0', name: 'Seleccione...'},
      {id: '1', name: 'Hugo'},
      {id: '2', name: 'Paco'},
      {id: '3', name: 'Luis'}
    ];
  }

  getComboConvenio(): any {
    return [
      {id: '1', name: 'Convenio 1'},
      {id: '2', name: 'Convenio 2'},
      {id: '3', name: 'Convenio 3'},
      {id: '4', name: 'Convenio 4'},
    ];
  }

}
