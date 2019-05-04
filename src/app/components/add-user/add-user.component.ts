import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.class';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = new User();
  constructor(private userService:UsersService
              ,private router:Router) { }

  ngOnInit() {
  }

  addUser() {
     let users = this.userService.getUsers()
     users.push(this.user)
     this.router.navigate(["/users"])
    console.log(this.user)
  }

}
