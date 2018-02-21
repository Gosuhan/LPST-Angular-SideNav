import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    component: UserListComponent,
    path: 'users',
    // children: [
    //   { path: ':id', component: UserDetailComponent }
    // ]
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
    children: [
      { path: 'edit', component: UserFormComponent },
      { path: 'posts', component: UserPostsComponent }
    ]
  },
  {
    component: PostListComponent,
    path: 'posts'
  },
  {
    component: PostDetailComponent,
    path: 'posts/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {}
