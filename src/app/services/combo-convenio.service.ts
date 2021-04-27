import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ComboConvenioService {

  constructor() { }
  getComboMoneda(): any {
    return [
      {id: '1', name: 'Convenio 1'},
      {id: '2', name: 'Convenio 2'},
      {id: '3', name: 'Convenio 3'},
      {id: '4', name: 'Convenio 4'},
    ];
  }
}
