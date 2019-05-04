import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.class';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users:User[]=[]

  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.users= this.userService.getUsers()
  }

  delete(i){
    this.users.splice(i,1)
  }

}
