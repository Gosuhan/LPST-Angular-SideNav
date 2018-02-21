import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iuser } from './iuser';
import { Ipost } from './ipost';

const HOST = 'http://localhost:3000';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iuser[]> {
    return this.http.get('http://localhost:3000/users') as Observable<Iuser[]>;
    // .pipe(
    // switchMap( u => data.map( u => newUser(u)))
    // )
  }

  getUser(id: number): Observable<Iuser> {
    //return this.http.get(`$HOST/users/` + id) as Observable<Iuser>;
    return this.http.get('http://localhost:3000/users/' + id) as Observable<Iuser>;
}

  updateUser(user: Iuser): Observable<Iuser> {
    return this.http.put(`${HOST}/users/${user.id}`, user) as Observable<Iuser>;
  }

  getPosts(): Observable<Ipost[]> {
    return this.http.get('http://localhost:3000/posts') as Observable<Ipost[]>;
  }

  getPost(id): Observable<Ipost> {
    return this.http.get(`${HOST}/posts/${id}`) as Observable<Ipost>;
  }

  getUserPosts(id): Observable<Ipost[]> {
    return this.http.get(`${HOST}/users/${id}/posts`) as Observable<Ipost[]>;
  }

}
