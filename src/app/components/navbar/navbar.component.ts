import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesearchService } from 'src/app/services/moviesearch.service';
import { MovieshareService } from 'src/app/services/movieshare.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search = new FormControl('');
  @Output() event = new EventEmitter();

  constructor(
    private movieSearch: MoviesearchService,
    private movieShare: MovieshareService) { }

  ngOnInit() { }

  onSearch() {
    this.movieSearch.searchMovie(this.search.value).subscribe(data => {
      this.movieShare.setMovieData(data.results);
      this.event.emit('event emitted');
    });
  }
}
