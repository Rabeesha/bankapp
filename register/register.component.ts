import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acno=""
  pwd=""
  phno=""
  bal=""
registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
 phno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  bal:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    console.log(this.registerForm.get('uname')?.errors)
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pwd=this.registerForm.value.pwd
    var phno=this.registerForm.value.phno
    var bal=this.registerForm.value.bal
    console.log(bal)
    if(this.registerForm.valid){
 this.ds.register(acno,uname,pwd,phno,bal)
 .subscribe((result:any)=>{
  if(result){ 
    alert(result.message)
    this.router.navigateByUrl("login")
  }
 
 },(result=>{
   alert(result.error.message)
 }))
      // console.log(result);
       
    }
    else{
      alert("invalid form")
    }
  
  }

}
