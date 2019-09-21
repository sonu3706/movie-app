import { TestBed } from '@angular/core/testing';

import { MoviesearchService } from './moviesearch.service';

describe('MoviesearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesearchService = TestBed.get(MoviesearchService);
    expect(service).toBeTruthy();
  });
});
