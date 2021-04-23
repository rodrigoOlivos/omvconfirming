import { TestBed } from '@angular/core/testing';

import { ComboMonedaService } from './combo-moneda.service';

describe('ComboMonedaService', () => {
  let service: ComboMonedaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboMonedaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
