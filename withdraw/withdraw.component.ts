import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  wacno=""
  wpswd=""
  wamount=""
  withdrawForm=this.fb.group({
    wacno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    wpswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  wamount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  withdraw(){ 
    console.log(this.withdrawForm.get('uname')?.errors)

    var acno=this.withdrawForm.value.wacno
    var pswd=this.withdrawForm.value.wpswd
    var amount=this.withdrawForm.value.wamount
   
    console.log(this.withdrawForm)
    if(this.withdrawForm.valid){
      this.ds.withdraw(acno,pswd,amount)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("userhome")
          
          
        }
      },(result)=>{
        alert(result.error.message)
      })
   
    }
else{
  alert("invalid form")
}

   
    }
  

}
