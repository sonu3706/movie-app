import {Component, OnInit} from '@angular/core';
import {MoviesaveService} from '../../services/moviesave.service';
import {Movie} from '../../model/movie';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private movieSaveService: MoviesaveService) {
  }

  ngOnInit() {
    console.log('my movie component loaded');
    this.getAllSavedMovies();
  }

  getAllSavedMovies(): void {
    this.movieSaveService.getAllSavedMovie().subscribe(data => {
      this.movies = data;
      for (const movie of this.movies) {
        movie.buttonValue = 'REMOVE';
      }
    });

  }

  onRemove(movie: Movie): void {
    console.log('Selected movie: ', movie);
    this.movieSaveService.removeSelectedMovie(movie).subscribe(data => {
      console.log(data);
      if(data === true){
        this.ngOnInit();
      }
    });
  }
}
