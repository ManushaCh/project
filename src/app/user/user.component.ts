import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GetdoctorsService } from '../getdoctors.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  doctors: any[] = []

  selectedDoctor: any[] = [];
  appointmentDataObj: any[] = [];
  accObj = {
    doctorname: '',
    consultationFee: 0,
    date: "01/02/2012",
    timmings: "5 am"

  };

  constructor(public serviceObj: GetdoctorsService, public fb: FormBuilder, public activatedRouteObj: ActivatedRoute, private routerObj: Router) { }

  ngOnInit(): void {
    this.getdoctor()
  }


  getdoctor() {
    this.serviceObj.getDoctorList().subscribe({
      next: (obj) => {
        this.doctors = obj.payload;
        console.log("doctors list after assigning is ", this.doctors);
      },
      error: (err) => { console.log(err) }
    })
  }


  goToModal(username) {
    this.appointmentDataObj.splice(0, this.appointmentDataObj.length)
    this.selectedDoctor.push(this.doctors.find(doctorObj => doctorObj.username == username));

    this.serviceObj.getDoctorData().next(this.selectedDoctor)
    this.appointmentDataObj = this.serviceObj.getDoctorData().getValue()

    console.log("from user c", this.appointmentDataObj)
  }



  appointmentForm = this.fb.group({
    date: [''],
    timmings: ['']
  })

  onSubmit() {
    console.log(typeof (this.appointmentForm.value.timmings))
    this.accObj.timmings = this.appointmentForm.value.timmings
    this.accObj.date = this.appointmentForm.value.date
    for (let v of this.appointmentDataObj) {
      this.accObj.doctorname = v.name
      this.accObj.consultationFee = v.consultationFee
    }
    console.log("obj is", this.accObj);

  }
  goToAccountPage() {
    this.serviceObj.getAccountPageDetails().next(this.accObj)
    this.routerObj.navigateByUrl('/user/account')
  }


}