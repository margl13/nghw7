import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../models/IPost';

@Component({
  selector: 'app-this-post',
  templateUrl: './this-post.component.html',
  styleUrls: ['./this-post.component.css']
})
export class ThisPostComponent implements OnInit {
  post: IPost;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.post = history.state.post;
    });
  }

  ngOnInit(): void {
  }

}
