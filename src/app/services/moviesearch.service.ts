import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MoviesearchService {
private apiKey: string = '06203334b59c6a533b36ecd954eb2d14';
  constructor(private http: HttpClient) { }

  searchMovie(movieName: string): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`.concat(movieName);
    return this.http.get(url, httpOptions);
  }

  public getTrendingMovies(mediaType: string): Observable<any>{
    const url = `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${this.apiKey}`;
    return this.http.get(url, httpOptions);
  }

  public getMovieDetails(id: number): Observable<any>{
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url, httpOptions);
  }
  public getMovieReviews(id: number): Observable<any>{
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.http.get(url, httpOptions);
  }
  public getMovieTrailer(id: number): Observable<any>{
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url, httpOptions);
  }

}
