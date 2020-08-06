import {Component, Input} from '@angular/core';
import {IUser} from '../../models/IUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: IUser;

  constructor(private router: Router) {
  }

  navigate(user): void {
    this.router.navigate(['users', 'user', user.id], {state: {user}});
  }
}
