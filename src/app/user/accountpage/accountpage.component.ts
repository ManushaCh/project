import { Component, OnInit } from '@angular/core';
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
  value:number;

  constructor(public serviceObj: GetdoctorsService,public routerObj:Router) { }

  ngOnInit(): void {
    this.accountDetails.push(this.serviceObj.getAccountPageDetails().getValue())
  }

  successfulPayment(){
  this.wallet=this.wallet-this.accountDetails[0].consultationFee
  console.log(this.wallet);
  }

  addToWallet(value){
    this.value=+value;
    this.wallet=this.wallet+this.value;
    console.log(this.wallet);
  }




}
