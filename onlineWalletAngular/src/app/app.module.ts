import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {WalletService}   from './wallet.service';
import {HttpClientModule} from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component'
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    WithdrawComponent,
    LoginComponent ,
    RegistrationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
