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

@NgModule({
  declarations: [AppComponent, ContentComponent, UserListComponent, PostListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    FlexLayoutModule,
    MatModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
