import { Component} from '@angular/core';
import {IPost} from '../../models/IPost';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent  {
  posts: IPost[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
    console.log(value);
    this.posts = value.fetchPosts;
   });
  }
}
