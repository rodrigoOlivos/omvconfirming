import { TestBed } from '@angular/core/testing';

import { NgxDataF29Service } from './ngx-data-f29.service';

describe('NgxDataF29Service', () => {
  let service: NgxDataF29Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDataF29Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
