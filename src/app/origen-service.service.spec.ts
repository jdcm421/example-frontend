import { TestBed } from '@angular/core/testing';

import { OrigenServiceService } from './origen-service.service';

describe('OrigenServiceService', () => {
  let service: OrigenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrigenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
