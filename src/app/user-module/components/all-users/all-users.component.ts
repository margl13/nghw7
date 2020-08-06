import { Component } from '@angular/core';
import {IUser} from '../../models/IUser';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent  {
  users: IUser[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      console.log(value);
      this.users = value.fetchUsers;
    });
  }
}
