import { TestBed } from '@angular/core/testing';

import { TuningService } from './tuning.service';

describe('TuningService', () => {
  let service: TuningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
