import {Component, Input} from '@angular/core';
import {IComment} from '../../models/IComment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment: IComment;
  constructor(private router: Router) { }


  navigate(comment): void {
    this.router.navigate(['comments', 'comment', comment.id], {state: {comment}});
  }
}
