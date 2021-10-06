import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeleteconfirmationComponent } from '../deleteconfirmation/deleteconfirmation.component';

const options={
  withCredentails:true,
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})


export class DataService {
  currentUser=""
  accountHolder=""
  accountBalance=""
  accountNum=""
  

 
  user:any={
    1000:{uname:"abijith",acno:1000,password:"userone",balance:5000,transaction:[]},
    1001:{uname:"neeer",acno:1001,password:"usertwo",balance:5000,transaction:[]},
    1002:{uname:"laisha",acno:1002,password:"userthree",balance:5000,transaction:[]}
  }
  acno: any;
  final: any;
  // static accountBalance: number;
  
  
  constructor(private http:HttpClient) { 
    //  this.getDetails()
  }
//   saveDetails(){
//     if(this.user){
      
//         localStorage.setItem("user",JSON.stringify(this.user))
      
//     }
//     if(this.currentUser){
      
//         localStorage.setItem("currentuser",JSON.stringify(this.currentUser))
      
//     }
//     if(this.accountHolder){
      
//       localStorage.setItem("accountholder",JSON.stringify(this.accountHolder))
    
//   }
//   if(this.accountBalance){
      
//     localStorage.setItem("accountbalance",JSON.stringify(this.accountBalance))
  
// }
// if(this.accountNum){
      
//   localStorage.setItem("accountNum",JSON.stringify(this.accountNum))

// }

 

//   }
//  getDetails(){
//    if(localStorage.getItem("user")){
//     this.user=JSON.parse( localStorage.getItem("user")||'')
//    }

//   if(localStorage.getItem("currentuser")){
//     this.currentUser=JSON.parse( localStorage.getItem("currentuser")||'')
//    }
//    if(localStorage.getItem("accountholder")){
//     this.accountHolder=JSON.parse( localStorage.getItem("accountholder")||'')
//    }
//    if(localStorage.getItem("accountbalance")){
//     this.accountBalance=JSON.parse( localStorage.getItem("accountbalance")||'')
//    }
   
   
//  }
 getTransaction(acno:any){
   const  data={
     acno
   }
  
// return this.user[acno].transaction
return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
 }
 getbalance(acno:any){
  const  data={
    acno
  } 
 
 return this.http.post('http://localhost:3000/account',data,this.getOptions())
}
  register(acno:any,uname:any, password:any,phonenumber:any,balance:any){
const data={
acno,
uname,
password,
phonenumber,
balance
}
return this.http.post('http://localhost:3000/register',data)



    // let accDetails=this.user

    // if(acno in accDetails){
    //   return false
    // }
    // else{
    //   accDetails[acno]={
    //     uname,
    //     acno,
    //     password,
    //     phonenumber,
    //     balance, 
    //     transaction:[]
    //   }
    //  console.log(this.user)
    //  this.saveDetails()
    //   return true
      
    // }

  }
login(acno:any,password:any){
  const data={
    acno,
    password
  }
  return this.http.post('http://localhost:3000/login',data,options)
  // let accDetails=this.user
  // if(acno in accDetails){
  //   if(password == accDetails[acno]["password"]){
  //   this.currentUser= accDetails[acno]["uname"]  
  //   this.accountHolder=accDetails[acno]["acno"]
  //   this.accountBalance=accDetails[acno]["balance"]
  //   this.accountNum=acno
    

    
  //   console.log(this.accountNum)
  //   this.saveDetails()
  //     return true
      
  //   }
  //   else{
  //     alert("invalid password")
  //     return false
  //   }
  // }
  // else{
  //   alert("invalid account number")
  //   return false
  // }

}
getOptions(){
  const token=localStorage.getItem("token")
  let headers=new HttpHeaders()
  if(token){
    headers=headers.append('x-access-token',token)
    options.headers=headers
  }
  return options
}

  deposit(acno:any,password:any,amount:any){
    const data={
      acno,
      password,amount
    }
   

    return this.http.post("http://localhost:3000/deposit",data,this.getOptions())
//     var amt=parseInt(amount)
//   let accDetails=this.user
//   if(acno in accDetails){
//     if(password==accDetails[acno]["password"]){
//       // accDetails[acno]["_balance"]+=amt
// var result=accDetails[acno]["balance"]+=amt
// accDetails[acno]["transaction"].push({
//   amount:amt,
//   type:"Credit"
// })
//  if(result){
//    var final=accDetails[acno]["balance"]=result
//  }

//   // this.accountBalance=accDetails[acno]["balance"]=accDetails[acno]["balance"]+=amt


   
//       this.saveDetails()

//       console.log(accDetails)
//       //  return accDetails[acno]["balance"]
      
//       return final
//     }
//     else{
//       alert("invalid password")
//       return false
// //     }
//   }
//   else{
//     alert("invalid user")
//   }

  }
  accDetails(accDetails: any) {
    throw new Error('Method not implemented.');
  }
  withdraw(acno:any,password:any,amount:any){
    const data={
      acno,
      password,amount
    }
  

    return this.http.post("http://localhost:3000/withdraw",data,this.getOptions())
  //   var amt=parseInt(amount)
  // let accDetails=this.user
  // if(acno in accDetails){
  //   if(password==accDetails[acno]["password"]){
  //     if(accDetails[acno]["balance"]>amt){
        
  //        var result=accDetails[acno]["balance"]-=amt
  //      if(result){
  //     accDetails[acno]["balance"]=result
  //      }
  //      accDetails[acno]["transaction"].push({
  //       amount:amt,
  //       type:"Debit"
  //     })
  //       this.saveDetails()
  //       return accDetails[acno]["balance"]
        
      
  //     }
  //     else{
  //       alert("insficient balance")
  //       return false
  //     }
  //   }
  // else{
  //   alert("invalid password")
  //   return false
  // }

  // }
  // else{
  //   alert("invalid user")
  // }
   }
deleteAcc(acno:any){
  return this.http.delete("http://localhost:3000/deleteAcc/"+acno,this.getOptions())

}

}



