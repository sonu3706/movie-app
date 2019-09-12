import { Component, OnInit } from '@angular/core';
import { MoviesearchService } from '../../services/moviesearch.service';
import { Movie } from '../../model/movie';
import { MoviesaveService } from '../../services/moviesave.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movieData: Movie[];
  public trendingMovieData: Movie[];
  public isMovieDataPresent = false;

  constructor(private movieSearch: MoviesearchService, private movieSave: MoviesaveService) { }

  ngOnInit() {
    this.getAllTrendingMovie('movie');
    this.getAllTrendingTvShow('tv');
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
      this.trendingMovieData = data.results;
      console.log(this.trendingMovieData);
    });
  }

  getAllTrendingTvShow(tv: string) {
    this.movieSearch.getTrending(tv).subscribe(data => {
      console.log(data.results);
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
