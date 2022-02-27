import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GetdoctorsService } from '../getdoctors.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  doctors: any[] = []

  selectedDoctor: any[]=[];

  constructor(public serviceObj: GetdoctorsService, public fb: FormBuilder, public activatedRouteObj: ActivatedRoute) { }


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
    this.selectedDoctor.push(this.doctors.find(doctorObj => doctorObj.username == username));
    this.serviceObj.doctorBehaviourSubject.next(this.selectedDoctor);
    console.log("after clicking on appointment button",this.selectedDoctor);
    
  }








  appointmentForm = this.fb.group({
    date: [''],
    timmings: ['']
  })

  onSubmit() {
    console.log(this.appointmentForm.value)
  }

}
