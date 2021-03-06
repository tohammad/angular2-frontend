import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
    });
  }

  showUserInfo(user: User) {
    alert(user.department);
  }

}
