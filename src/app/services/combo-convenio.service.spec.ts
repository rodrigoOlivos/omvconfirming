import { TestBed } from '@angular/core/testing';

import { ComboConvenioService } from './combo-convenio.service';

describe('ComboConvenioService', () => {
  let service: ComboConvenioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboConvenioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
