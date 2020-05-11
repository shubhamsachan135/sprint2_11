import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { WalletService } from '../wallet.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  submitted = false;
  //accountBalance:any;
  amount:any;
   phoneNumber:any;
   userName:any;
  addWithdrawForm: FormGroup;
  constructor(private _walletService: WalletService,private _router:Router) { }

  ngOnInit() {
    this.addWithdrawForm = new FormGroup({
      amount: new FormControl('',[Validators.required,Validators.pattern("^[1-9][0-9]*.[0-9]*$")]),  
    });
    this.phoneNumber=this._walletService.phoneNumber;
    this.userName=this._walletService.userModel.firstName+" "+this._walletService.userModel.lastName;
  }
  get f() { return this.addWithdrawForm.controls; }
  onSubmit() {
    this.submitted=true;
    this.amount=this.addWithdrawForm.value.amount;
    this._walletService.withdrawMoney(this.phoneNumber,this.amount)
   // .subscribe(data=>{console.log(data)
    //       this.accountBalance=data;
     //     console.log(this.accountBalance);
    //      this._router.navigate(['/dashboard',this.accountBalance]);
     //     alert("Money Added Successfully");
   // },
   //  error=>console.log(error)
   //   );
    //console.log(this.accountBalance);
   
    
  }

  
}
