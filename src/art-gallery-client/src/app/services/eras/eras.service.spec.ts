import { TestBed } from '@angular/core/testing';

import { ErasService } from './eras.service';

describe('ErasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErasService = TestBed.get(ErasService);
    expect(service).toBeTruthy();
  });
});
