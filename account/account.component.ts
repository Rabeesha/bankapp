import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AnyAaaaRecord } from 'dns';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
// acc=this.ds.accountHolder
// accbal=this.ds.accountBalance
//   accountBalance: any;
//   accountHolder: any;
//   userBalance: any;
//   final: any;
user:any
acno:any
accbalance:any
deleteacno:any
Dlogin:Date=new Date()
  constructor(private ds:DataService, private router:Router ) {
   
    // this.accountBalance=JSON.parse( localStorage.getItem("accountbalance")||'')
    // console.log(this.accountBalance   )

    // this.user=JSON.parse(localStorage.getItem("currentuser")||'')
    this.acno=JSON.parse(localStorage.getItem("currentAcc")||'')
    this.ds.getbalance(this.acno)
    .subscribe((result:any)=>{
      if(result){
       this.accbalance= result.balance
      }
    },(result)=>{
      alert(result.error.message)
    }
    )

   

   }
   
   deleteAtparaent(){
    this.deleteacno=JSON.parse(localStorage.getItem("currentAcc")||'')
    // alert("clicked")
  }
  onCancel(){
    this.deleteacno="  "
       }
  onDelete(event:any){
    this.ds.deleteAcc(event)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        localStorage.removeItem("token")
        this.router.navigateByUrl("")
      }
    },(result)=>{
      alert(result.error.message)
    }
    )

      }
 
  ngOnInit(): void {
  }
  

}





function deleteAtparaent() {
  throw new Error('Function not implemented.');
}
// function getDetails() {
//   throw new Error('Function not implemented.');
// }

// function deleteAtparaent() {
//   throw new Error('Function not implemented.');
// }

