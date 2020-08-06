import { Component } from '@angular/core';
import {IComment} from '../../models/IComment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {
  comments: IComment[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      console.log(value);
      this.comments = value.fetchComment;
    });
  }
}
