import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import { ThisPostComponent } from './components/this-post/this-post.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [AllPostsComponent, ThisPostComponent, PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostModule { }
