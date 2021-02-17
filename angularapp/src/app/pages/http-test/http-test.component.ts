import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from 'src/app/services/http-movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  constructor(private http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const movie: Movie = {
    country: "Poland",
    director: "Marek Brodzki",
    category: "Fantasy",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    year: "2001",
    title: "The Witcher",
    imdbRating: "10.0"
    }
    this.http.postMovie(movie).subscribe();
  }

  put() {
    const movie: Movie = {
      country: "Poland",
      director: "Marek Brodzki",
      category: "Fantasy",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      year: "2001",
      title: "The Witcher 2",
      imdbRating: "10.0",
      id: '54'
      }
      this.http.putMovie(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> = {
      plot: "Gerald szuka Ciri",
      id: '54'
      }
      this.http.patchMovie(movie).subscribe();
  }

  delete() {
    this.http.deleteMovie('54').subscribe();
  }

  params() {
    this.http.params().subscribe();
  }
}
