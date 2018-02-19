import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Ipost } from './ipost';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<Iuser[]> {
    return this.http.get('http://localhost:3000/users') as Observable<Iuser[]>;
    // .pipe(
    // switchMap( u => data.map( u => newUser(u)))
    // )
  }

  getPost(): Observable<Ipost[]> {
    return this.http.get('http://localhost:3000/posts') as Observable<Ipost[]>;
  }

}
