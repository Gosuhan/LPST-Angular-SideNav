import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Ipost } from '../core/ipost';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private api: ApiService) { }

  posts: Ipost[];
  errText: string;

  ngOnInit() {
    this.api.getPosts().subscribe( (data: Ipost[]) =>  {
      this.posts = data;
    }/*, err => this.errText = 'La requête a échoué !'*/); // L'erreur ne fonctionne pas !!
  }


}
