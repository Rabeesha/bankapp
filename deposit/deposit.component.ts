import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  acno=""
  pswd=""
  amount=""
depositForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]


})
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
    console.log(this.depositForm.get('uname')?.errors)
  var acno=this.depositForm.value.acno
  var pswd=this.depositForm.value.pswd
  var amount=this.depositForm.value.amount
  if(this.depositForm.valid){
 this.ds.deposit(acno,pswd,amount)

 .subscribe((result:any)=>{
  if(result){
    alert(result.message)
    this.router.navigateByUrl("userhome")

  }
 },(result)=>{
   alert(result.error.message)
 }
 )
 
  
  }

else{
  alert("invalid form")
}


  }

}
