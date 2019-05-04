import { Injectable } from '@angular/core';
import { User } from '../models/User.class';

@Injectable()
export class UsersService {

  users:User[]=[
    {id:2,firstName:"ilyass",lastName:'elfouih',age:26},
    {id:3,firstName:"mohmed",lastName:'mohmed',age:56},
    {id:4,firstName:"said",lastName:'said',age:30},
    {id:5,firstName:"younness",lastName:'younness',age:26},
    {id:6,firstName:"jawad",lastName:'jawad',age:24},
    {id:7,firstName:"ayoub",lastName:'ayoub',age:22},
   
  ]
  constructor() { }

  getUsers(){
    return this.users;
  }
}
