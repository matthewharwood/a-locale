import { TestBed, inject } from '@angular/core/testing';

import { WorldbankService } from './worldbank.service';

describe('WorldbankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorldbankService]
    });
  });

  it('should be created', inject([WorldbankService], (service: WorldbankService) => {
    expect(service).toBeTruthy();
  }));
});
