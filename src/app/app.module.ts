import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { RoutingModule } from './/routing.module';
import { MatModule } from './/mat.module';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { ApiService } from './core/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './core/user.service';
import { FormsModule } from '@angular/forms';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostService } from './core/post.service';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [AppComponent, ContentComponent, UserListComponent, PostListComponent, UserDetailComponent, UserFormComponent, UserPostsComponent, PostDetailComponent, PostFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
    MatModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
