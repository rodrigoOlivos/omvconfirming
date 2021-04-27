import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComboClienteService {

  constructor() { }
  getComboMoneda(): any {
    return [
      {id: '0', name: 'Seleccione...'},
      {id: '1', name: 'Hugo'},
      {id: '2', name: 'Paco'},
      {id: '3', name: 'Luis'}
    ];
  }
}
