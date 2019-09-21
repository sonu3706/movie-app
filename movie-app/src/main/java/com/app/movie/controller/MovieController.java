package com.app.movie.controller;

import com.app.movie.model.Movie;
import com.app.movie.model.Review;
import com.app.movie.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/movie")
@CrossOrigin("*")
public class MovieController {

    private MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @PostMapping()
    public ResponseEntity<?> createMovie(@RequestBody Movie movie) {
        ResponseEntity responseEntity = null;
        try {
            movie = movieService.saveMovie(movie);
            responseEntity = new ResponseEntity(movie, HttpStatus.OK);
        } catch (Exception ex) {
            responseEntity = new ResponseEntity(HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @GetMapping("/id")
    public ResponseEntity<?> getMovie(@PathVariable() int id) {
        ResponseEntity responseEntity = null;
        try {
            Movie fetchedMovie = movieService.getMovieById(id);
            responseEntity = new ResponseEntity(fetchedMovie, HttpStatus.OK);
        } catch (Exception ex) {
            responseEntity = new ResponseEntity(HttpStatus.CONFLICT);
        }
        return responseEntity;

    }


    @GetMapping()
    public ResponseEntity<?> getAllSavedMovie() {
        ResponseEntity responseEntity = null;
        try {
            List<Movie> movieList = movieService.getAllMovies();
            responseEntity = new ResponseEntity(movieList, HttpStatus.OK);
        } catch (Exception ex) {
            responseEntity = new ResponseEntity(ex.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMovieById(@PathVariable() int id) {
        ResponseEntity responseEntity = null;
        try {
            Boolean status = movieService.deleteMovieById(id);
            responseEntity = new ResponseEntity(status, HttpStatus.OK);
        } catch (Exception ex) {
            responseEntity = new ResponseEntity(ex.getMessage(), HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> addReview(@PathVariable("id") int id, @RequestBody Review review) {
        ResponseEntity responseEntity = null;
        try {
            Movie movie = movieService.addReview(id, review);
            responseEntity = new ResponseEntity(movie, HttpStatus.OK);
        } catch (Exception ex) {
            responseEntity = new ResponseEntity(ex, HttpStatus.CONFLICT);
        }
        return responseEntity;
    }
}
