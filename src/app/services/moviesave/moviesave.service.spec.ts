import { TestBed } from '@angular/core/testing';

import { MoviesaveService } from './moviesave.service';

describe('MoviesaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesaveService = TestBed.get(MoviesaveService);
    expect(service).toBeTruthy();
  });
});
