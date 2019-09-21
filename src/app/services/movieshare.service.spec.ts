import { TestBed } from '@angular/core/testing';

import { MovieshareService } from './movieshare.service';

describe('MovieshareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieshareService = TestBed.get(MovieshareService);
    expect(service).toBeTruthy();
  });
});
