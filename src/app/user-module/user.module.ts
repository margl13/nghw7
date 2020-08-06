import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {ThisUserComponent} from './components/this-user/this-user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [AllUsersComponent, ThisUserComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule { }
