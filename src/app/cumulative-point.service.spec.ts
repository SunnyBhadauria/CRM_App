import { TestBed } from '@angular/core/testing';

import { CumulativePointService } from './cumulative-point.service';

describe('CumulativePointService', () => {
  let service: CumulativePointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CumulativePointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
