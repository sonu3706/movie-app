import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MoviesaveService {

  constructor(private http: HttpClient) { }

  // Save movie method
  public saveMovie(movie: Movie): Observable<Movie> {
    const saveMovieUrl = `http://localhost:8080/movie`;
    return this.http.post<Movie>(saveMovieUrl, movie, httpOptions);

  }

  public getMySavedMovies(): Observable<Movie[]> {
    const getMoviesUrl = `http://localhost:8080/movie`;
    return this.http.get<Movie[]>(getMoviesUrl, httpOptions);
  }
}
