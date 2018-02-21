import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Ipost } from './ipost';
import { tap } from 'rxjs/operators';

@Injectable()
export class PostService {

  selectedPost: Ipost;

  constructor(private api: ApiService) { }

  getPost(id: number) {
    return this.api.getPost(id).pipe(
      tap( post => this.selectedPost = post)
    );
  }

}
