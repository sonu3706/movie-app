import { Component, OnInit } from '@angular/core';
import { MoviesearchService } from '../../services/moviesearch.service';
import { Movie } from '../../model/movie';
import { MoviesaveService } from '../../services/moviesave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movieData: Movie[];
  public trendingMovieData: Movie[];
  public isMovieDataPresent = false;

  constructor(private movieSearch: MoviesearchService, private movieSave: MoviesaveService, private router: Router) { }

  ngOnInit() {
    if(this.router.url === '/home/trending'){
      console.log(this.router.url);
      this.getAllTrendingMovie('movie');
    }
    else if(this.router.url === '/home/tv'){
      this.getAllTrendingTvShow('tv');
    }
  }

  showData(movies: Movie[]) {
    console.log('Displaying searched movies');
    this.movieData = movies;
    this.isMovieDataPresent = true;
    for (const movie of this.movieData) {
      movie.buttonValue = 'SAVE';
    }
  }

  getAllTrendingMovie(movie: string) {
    this.movieSearch.getTrending(movie).subscribe(data => {
      this.movieData = data.results;
      this.showData(this.movieData);
      this.isMovieDataPresent = true;
    });
  }

  getAllTrendingTvShow(tv: string) {
    this.movieSearch.getTrending(tv).subscribe(data => {
      console.log(data.results);
      this.movieData = data.results;
      this.showData(this.movieData);
      this.isMovieDataPresent = true;
      
    });
  }

  onSave(movie: Movie) {
    this.movieSave.saveMovie(movie).subscribe(data => {
      for (const movies of this.movieData) {
        if (movies.id === data.id) {
          movies.buttonValue = 'REMOVE';
          break;
        }
      }
    });
  }

}
