import { Component, OnInit } from '@angular/core';
import {IComment} from '../../models/IComment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-this-comment',
  templateUrl: './this-comment.component.html',
  styleUrls: ['./this-comment.component.css']
})
export class ThisCommentComponent implements OnInit {
  comment: IComment;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.comment = history.state.comment;
    });
  }

  ngOnInit(): void {
  }

}
