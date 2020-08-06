import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HelloComponent} from './components/hello/hello.component';

const routes: Routes = [
  {
    path: '', component: HelloComponent
  },
  {
    path: 'users', loadChildren: () => import('./user-module/user.module').then(m => m.UserModule)
  },
  {
    path: 'posts', loadChildren: () => import('./post-module/post.module').then(m => m.PostModule)
  },
  {
    path: 'comments', loadChildren: () => import('./comment-module/comment.module').then(m => m.CommentModule)
  }
];

@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
