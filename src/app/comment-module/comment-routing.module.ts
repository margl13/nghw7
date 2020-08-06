import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';
import {CommentResolveService} from './services/comment-resolve.service';
import {ThisCommentComponent} from './components/this-comment/this-comment.component';

const routes: Routes = [
  {
    path: '', component: AllCommentsComponent, resolve: {fetchComment: CommentResolveService},
    children: [
      {
        path: 'comment/:id', component: ThisCommentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
