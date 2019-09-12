import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Movie} from '../model/movie';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MoviesaveService {

  constructor(private http: HttpClient) {
  }

  saveMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:8080/movie', movie, httpOptions);
  }

  getAllSavedMovie(): Observable<any> {
    return this.http.get('http://localhost:8080/movie', httpOptions);
  }

  removeSelectedMovie(movie: Movie): Observable<any> {
    return this.http.delete(`http://localhost:8080/movie/${movie.id}`, httpOptions);
  }

}
