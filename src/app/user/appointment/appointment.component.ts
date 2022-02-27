import { Component, OnInit } from '@angular/core';
import { GetdoctorsService } from 'src/app/getdoctors.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

appointmentData:any[]=[];

  constructor(public serviceObj:GetdoctorsService) { }

  ngOnInit(): void {
    
  }

  getData(){
    this.serviceObj.doctorObservable.subscribe({
      next:(selectedDoctor)=>{selectedDoctor=this.appointmentData}
    })
  }

}
