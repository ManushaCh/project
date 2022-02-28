import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetdoctorsService {

  constructor(public httpObj:HttpClient) { }

  doctorBehaviourSubject=new BehaviorSubject(null);

 getDoctorData(){
   return this.doctorBehaviourSubject
 }


 accountBehaviourSubject=new BehaviorSubject(null);
 getAccountPageDetails(){
   return this.accountBehaviourSubject
 }







  getDoctorList():Observable<any>{
    return this.httpObj.get<any>("http://localhost:2000/doctor/getdoctors")
  }
  
  // getDoctorByUsername(doctorObj):Observable<any>{
  //   return this.httpObj.get(`http://localhost:2000/doctor/getdoctor/${doctorObj.username}`)
  // }
}
