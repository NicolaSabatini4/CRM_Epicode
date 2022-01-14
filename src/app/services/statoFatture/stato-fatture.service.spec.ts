import { TestBed } from '@angular/core/testing';

import { StatoFattureService } from './stato-fatture.service';

describe('StatoFattureService', () => {
  let service: StatoFattureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatoFattureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
