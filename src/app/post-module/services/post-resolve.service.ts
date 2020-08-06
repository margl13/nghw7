import { Injectable } from '@angular/core';
import {IPost} from '../models/IPost';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostService} from './post.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]>{

  constructor(private postService: PostService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getPosts();
  }
}


