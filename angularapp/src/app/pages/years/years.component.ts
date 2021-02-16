import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {
  years: Observable<string[]>;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.years = this.http.getYears().pipe(map((years) => {
      years.sort((a, b) => {
          return a < b ? -1 : 1;
       });
      return years;
      }));
  }
}
