import { Component } from '@angular/core';
import { GetdoctorsService } from './getdoctors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstackmedico';
  constructor(public serviceObj:GetdoctorsService) { }

  ngOnInit(): void{
    this.serviceObj.getDoctorList().subscribe({
          next:(obj)=>{console.log(obj.payload)},
           error:(err)=>{console.log(err)}
       })
  }



 }
