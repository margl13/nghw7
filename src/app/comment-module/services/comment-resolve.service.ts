import { Injectable } from '@angular/core';
import {IComment} from '../models/IComment';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CommentService} from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<IComment[]>{

  constructor(private commentService: CommentService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment[]> | Promise<IComment[]> | IComment[] {
    return this.commentService.getComments();
  }
}
