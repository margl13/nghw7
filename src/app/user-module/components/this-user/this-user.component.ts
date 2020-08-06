import { Component, OnInit } from '@angular/core';
import {IUser} from '../../models/IUser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-this-user',
  templateUrl: './this-user.component.html',
  styleUrls: ['./this-user.component.css']
})
export class ThisUserComponent implements OnInit {
  user: IUser;
  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = history.state.user;
  });
  }
  ngOnInit(): void {
  }

}
