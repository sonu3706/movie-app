import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MoviesearchService {

  constructor(private http: HttpClient) {
  }

  searchMovieByName(movieName: string): Observable<any> {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=06203334b59c6a533b36ecd954eb2d14&query='.concat(movieName);
    return this.http.get(url, httpOptions);
  }

  getTrending(mediaType: string): Observable<any> {
    const trendingURL = `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=06203334b59c6a533b36ecd954eb2d14`;
    return this.http.get(trendingURL, httpOptions);
  }
}
