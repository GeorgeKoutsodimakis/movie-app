import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieService{
  static get parameters() {
         return [[Http]];
     }
     constructor(private http:Http) {

     	}

    searchMovies(movieName) {
      var url = 'https://api.themoviedb.org/3/search/movie?api_key=45d2fbeffc3c05d95b00561a6c2ee6de&query='+movieName;
      var response = this.http.get(url).map(res => res.json());
   return response;


   }
}
