import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lista:User[]=[];

  constructor(private _userService:UserService){}
  ngOnInit():void{
    this.getUsers();
  }
  getUsers(){
    this._userService.getUsers().subscribe(data=>{
      console.log(data);
      this.lista=data;
    })
  }
}
