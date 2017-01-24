import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService]
})
export class AddUserComponent implements OnInit {

  newUser: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addUser(user: User) {
      this.newUser = new User();
      this.newUser.employeeId =user.employeeId
      this.newUser.firstName = user.firstName;
      this.newUser.lastName = user.lastName;
      this.newUser.designation = user.designation;
      this.newUser.department = user.department;
      this.newUser.contactNumber = user.contactNumber;
      this.newUser.email = user.email;
      this.newUser.reportingTo = user.reportingTo;
      this.newUser.joiningDate = user.joiningDate;

      this.userService.createUser(this.newUser)
      .subscribe(user => {
        this.router.navigate(['/users']);
      },
      err => {
        console.log(err);
      });
      
  }

}
