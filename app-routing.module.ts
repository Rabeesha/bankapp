import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BankindexComponent } from './bankindex/bankindex.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path:'transaction',component:TransactionComponent
  },
  {
    path:'account',component:AccountComponent
  },
  {
    path:'withdraw',component:WithdrawComponent
  },
  {
    path:'deposit',component:DepositComponent
  },
  {
    path:'userhome',component:UserhomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:BankindexComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
