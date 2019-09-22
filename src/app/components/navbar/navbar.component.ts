import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesearchService } from 'src/app/services/moviesearch.service';
import { MovieshareService } from 'src/app/services/movieshare.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search = new FormControl('');

  constructor(private movieSearch: MoviesearchService, private movieShare: MovieshareService, private router: Router) { }

  ngOnInit() { }
  onSearch() {
    console.log(this.search.value);
    this.movieSearch.searchMovie(this.search.value).subscribe( data => {
      this.movieShare.setMovieData(data.results);
      this.router.navigate([`search`]);
    });
  }
}
