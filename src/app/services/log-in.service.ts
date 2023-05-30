import { Injectable } from '@angular/core';
import {Patient} from "../interfaces/patient";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  patients: Patient[] = [];
  constructor(private http: HttpClient) { }

  addPatient(patient: Patient){
    this.patients.push(patient);
  }

  registerPatient(patient: Patient){
    const url = 'http://localhost:3000/patients';
    return this.http.post(url, patient);
  }

  getPatient(dni:string, password:string): Patient | undefined {
    return this.patients.find(patient => patient.dni==dni && patient.password == password);
  }

  showPatient(): Patient[]{
    return this.patients;
  }

}
