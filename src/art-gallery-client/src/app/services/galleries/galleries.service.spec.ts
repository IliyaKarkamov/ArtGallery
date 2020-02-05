import { TestBed } from '@angular/core/testing';

import { GalleriesService } from './galleries.service';

describe('GalleriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleriesService = TestBed.get(GalleriesService);
    expect(service).toBeTruthy();
  });
});
