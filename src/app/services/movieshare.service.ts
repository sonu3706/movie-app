import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieshareService {
  private movieData: Movie[];
  private messageSource = new BehaviorSubject<Movie[]>(this.movieData);

  constructor() { }

  getMovieData(): Observable<Movie[]> {
    return this.messageSource.asObservable();
  }

  setMovieData(movies: Movie[]): void {
    this.messageSource.next(movies);
  }
}
