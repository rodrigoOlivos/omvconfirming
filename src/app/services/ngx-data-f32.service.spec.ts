import { TestBed } from '@angular/core/testing';

import { NgxDataF32Service } from './ngx-data-f32.service';

describe('NgxDataF32Service', () => {
  let service: NgxDataF32Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDataF32Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
