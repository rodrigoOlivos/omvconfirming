import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComboTipoMatrizService {

  constructor() { }
  getComboMatriz(): any {
    return [
      {id: '0', name: 'seleccione..'},
      {id: '12', name: 'Costo Fondo'},
      {id: '2', name: 'Comprador'},
      {id: '3', name: 'Proveedor'},
      {id: '4', name: 'Tmc'},
      {id: '5', name: 'Comiciones'},
      {id: '6', name: 'Gastos'}
    ];
  }
}
