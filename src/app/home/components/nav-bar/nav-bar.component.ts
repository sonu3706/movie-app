import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MoviesearchService} from '../../services/moviesearch.service';
import {Movie} from '../../model/movie';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  search = new FormControl('');
  public movieData: Movie[];
  @Output() movies = new EventEmitter<Movie[]>();


  constructor(private movieSearch: MoviesearchService) {
  }

  ngOnInit() {
  }

  onSearch() {
    this.movieSearch.searchMovieByName(this.search.value).subscribe(data => {
      this.movieData = data.results;
      this.movies.emit(this.movieData);
    });
  }

}
