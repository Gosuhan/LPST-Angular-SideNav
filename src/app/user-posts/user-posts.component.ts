import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { UserService } from '../core/user.service';
import { Ipost } from '../core/ipost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  posts: Ipost[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserPosts().subscribe(
      posts => this.posts = posts
    );
  }
  selectPost(id: number) {
    this.router.navigate([`/posts`, id]);
  }
}
