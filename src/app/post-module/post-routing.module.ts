import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {ThisPostComponent} from './components/this-post/this-post.component';
import {PostResolveService} from './services/post-resolve.service';

const routes: Routes = [
  {
    path: '', component: AllPostsComponent, resolve: {fetchPosts: PostResolveService},
    children: [
      {
        path: 'post/:id', component: ThisPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
