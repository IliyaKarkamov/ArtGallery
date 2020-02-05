import { TestBed } from '@angular/core/testing';

import { ArtefactsService } from './artefacts.service';

describe('ArtefactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtefactsService = TestBed.get(ArtefactsService);
    expect(service).toBeTruthy();
  });
});
