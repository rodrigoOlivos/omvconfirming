import { TestBed } from '@angular/core/testing';

import { NgxDataF33Service } from './ngx-data-f33.service';

describe('NgxDataF33Service', () => {
  let service: NgxDataF33Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDataF33Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
