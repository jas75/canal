import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/Movie';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>('http://localhost:4200/assets/dataset/codebeautify.json');
  }
  
}
