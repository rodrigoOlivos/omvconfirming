import { TestBed } from '@angular/core/testing';

import { ComboClienteService } from './combo-cliente.service';

describe('ComboUsuariosService', () => {
  let service: ComboClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
