import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-landling-p',
  templateUrl: './landling-p.component.html',
  styleUrls: ['./landling-p.component.css']
})
export class LandlingPComponent implements OnInit {

  constructor(public userService:UserService) { }
  title:string = "Landing Page";
  subTitle:string;
  curUser:User;
  showUser:boolean=false;

  ngOnInit(): void {
    this.subTitle = "Hello!!";
  }

  getCurUser(){
    this.userService.getCurrentUser().subscribe((data:User)=>{
      this.curUser=data;
      this.showUser= true;
    });
  }

}
