import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdoctorsService } from 'src/app/getdoctors.service';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {


  accountDetails: any[] = [];

  wallet: number = 1000;

  displayStyle="none";
  value:number=0;

  constructor(public serviceObj: GetdoctorsService,public routerObj:Router,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.accountDetails.push(this.serviceObj.getAccountPageDetails().getValue())
  }

  successfulPayment(){
  this.wallet=this.wallet-this.accountDetails[0].consultationFee
  console.log(this.wallet);
  }

  addToInput(valuefromButton){
    this.value=this.value+valuefromButton;
  }


  AddMOney=this.fb.group({
    addMoney:['']
  })


  addToWallet(){
  let value=this.AddMOney.value.addMoney
  console.log(this.AddMOney.value.addMoney);
  
  this.wallet=this.wallet+value
  }


  



}
