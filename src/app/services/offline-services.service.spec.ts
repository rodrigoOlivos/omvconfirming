import { TestBed } from '@angular/core/testing';

import { OfflineServicesService } from './offline-services.service';

describe('OfflineServicesService', () => {
  let service: OfflineServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
