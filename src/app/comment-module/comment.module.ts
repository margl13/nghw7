import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { ThisCommentComponent } from './components/this-comment/this-comment.component';
import {HttpClientModule} from '@angular/common/http';
import {CommentService} from './services/comment.service';


@NgModule({
  declarations: [AllCommentsComponent, CommentComponent, ThisCommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [CommentService]
})
export class CommentModule { }
