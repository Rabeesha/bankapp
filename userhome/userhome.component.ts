import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
 user:any
  constructor(private ds:DataService,private router:Router) {
 this.user=localStorage.getItem("currentUser")
   }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("please Login")
      this.router.navigateByUrl("login")
  }
}
logout(){
  localStorage.removeItem("token")
  this.router.navigateByUrl("login")

  }
  
}

