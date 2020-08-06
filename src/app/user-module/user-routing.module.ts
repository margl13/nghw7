import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {ThisUserComponent} from './components/this-user/this-user.component';
import {UserResolveService} from './services/user-resolve.service';

const routes: Routes = [
  {
    path: '', component: AllUsersComponent, resolve: {fetchUsers: UserResolveService},
    children: [
      {
        path: 'user/:id', component: ThisUserComponent
      }
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
