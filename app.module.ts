import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{HttpClientModule}from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankindexComponent } from './bankindex/bankindex.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RegisterComponent } from './register/register.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DeleteconfirmationComponent } from './deleteconfirmation/deleteconfirmation.component';
import { HighlightsDirective } from './directives/highlights.directive';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    BankindexComponent,
    LoginComponent,
    UserhomeComponent,
    RegisterComponent,
    DepositComponent,
    WithdrawComponent,
    AccountComponent,
    TransactionComponent,
    DeleteconfirmationComponent,
    HighlightsDirective,
    AnimationDemoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
