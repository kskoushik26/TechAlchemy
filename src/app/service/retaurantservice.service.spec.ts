import { TestBed } from '@angular/core/testing';

import { RetaurantserviceService } from './retaurantservice.service';

describe('RetaurantserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetaurantserviceService = TestBed.get(RetaurantserviceService);
    expect(service).toBeTruthy();
  });
});
