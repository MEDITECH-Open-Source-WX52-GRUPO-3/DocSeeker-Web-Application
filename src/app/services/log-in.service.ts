import { Injectable } from '@angular/core';
import {Patient} from "../interfaces/patient";

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  patients: Patient[] = [];
  constructor() { }

  addPatient(patient: Patient){
    this.patients.push(patient);
  }

  getPatient(dni:string, password:string): Patient | undefined {
    return this.patients.find(patient => patient.dni==dni && patient.password == password);
  }

  showPatient(): Patient[]{
    return this.patients;
  }

}
