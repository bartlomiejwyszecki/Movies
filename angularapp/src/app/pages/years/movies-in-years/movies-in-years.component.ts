import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movies-in-years',
  templateUrl: './movies-in-years.component.html',
  styleUrls: ['./movies-in-years.component.css']
})
export class MoviesInYearsComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.http.getMoviesFromYear(params.get('year'))
      )
    );
  }

}
