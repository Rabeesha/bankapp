import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acno=""
  pswd=""
  user=this.ds.currentUser
loginForm=this.fb.group({
 acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
 pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] 
})
  constructor(private router : Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // !----------------- evnt binding using $event  asargument chnage !---------------


// accChange(event:any){
//   this.acno=event.target.value

// }
// pswdChange(event:any){
//   this.pswd=event.target.value
//   console.log(event.target.value)

// }
login(){
  console.log(this.loginForm.get('uname')?.errors)
  var acno=this.loginForm.value.acno 
  var pswd=this.loginForm.value.pswd
  if(this.loginForm.valid){
  this.ds.login(acno,pswd)
  .subscribe((result:any)=>{
    if(result){

      localStorage.setItem("token",result.token)
      localStorage.setItem("currentUser",result.currentUser)
      localStorage.setItem("currentAcc",acno)
      localStorage.setItem("balance",result.balance)
      alert(result.message)
      this.router.navigateByUrl("userhome")
    }
  },(result=>{
    alert(result.error.message)
  }))

  
}
// else{
//   alert("invalid form")
// }


 
  
}
// ----------- event binding using template reffernce variable------------------
// login(a:any,p:any){
//   var acno=a.value
//   var pswd=p.value
//   let accDetails=this.user
//   if(acno in accDetails){
//         if(pswd == accDetails[acno]["password"]){
//            alert("login succesfull")
//          }
//          else{
//            alert("invalid password")
//          }
//        }
//        else{
//          alert("invalid account number")
//        }






//      }
    





    }

