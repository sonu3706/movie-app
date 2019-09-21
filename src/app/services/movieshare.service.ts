import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieshareService {
  private movieData: Movie[];

  constructor() { }

  setMovieData(movies: Movie[]): void {
    this.movieData = movies;
  }

  getMovieData(): Movie[] {
    return this.movieData;
  }
}
