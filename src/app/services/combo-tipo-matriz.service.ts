import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComboTipoMatrizService {

  constructor() { }
  getComboMatriz(): any {
    return [
      {id: '0', name: 'seleccione..'},
      {id: '1', name: 'costo fondo'},
      {id: '2', name: 'comprador'},
      {id: '3', name: 'proveedor'},
      {id: '4', name: 'tmc'},
      {id: '5', name: 'comiciones'},
      {id: '6', name: 'gastos'}
    ];
  }
}
