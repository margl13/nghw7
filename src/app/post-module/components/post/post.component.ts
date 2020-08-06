import {Component, Input} from '@angular/core';
import {IUser} from '../../../user-module/models/IUser';
import {Router} from '@angular/router';
import {IPost} from '../../models/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  @Input()
  post: IPost;

  constructor(private router: Router) { }
  navigate(post): void {
    this.router.navigate(['posts', 'post', post.id], {state: {post}});
  }
}
