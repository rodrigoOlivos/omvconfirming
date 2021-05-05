import { TestBed } from '@angular/core/testing';

import { NgxDataF30Service } from './ngx-data-f30.service';

describe('NgxDataF30Service', () => {
  let service: NgxDataF30Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDataF30Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
