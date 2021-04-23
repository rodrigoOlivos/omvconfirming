import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComboMonedaService {

  constructor() { }
  getComboMoneda(): any {
    return [
      {id: '1', name: 'Cl Peso'},
      {id: '2', name: 'US Dolar'},
      {id: '3', name: 'Aus Dolar'},
      {id: '4', name: 'Mx Peso'}
    ];
  }
}
