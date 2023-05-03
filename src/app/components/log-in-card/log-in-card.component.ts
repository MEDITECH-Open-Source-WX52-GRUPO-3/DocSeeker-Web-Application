import { Component } from '@angular/core';
import {Patient} from "../../interfaces/patient";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LogInService} from "../../services/log-in.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-log-in-card',
  templateUrl: './log-in-card.component.html',
  styleUrls: ['./log-in-card.component.css'],
  providers: [MatSnackBar]
})
export class LogInCardComponent {
  rpassword: string='';
  patient: Patient ={ dni: '', password:''};
  patients: Patient[]=[];
  signInForm: FormGroup;
  constructor(private snackBar:MatSnackBar, private loginService:LogInService, public builder:FormBuilder) {
    this.signInForm = this.builder.group({
      dni: ['',[Validators.required, Validators.minLength(8)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get dni(){
    return this.signInForm.controls['dni'];
  }

  get password(){
    return this.signInForm.controls['password'];
  }

  register() {
    if ((this.patient.password == this.rpassword) && this.rpassword !='') {
      this.loginService.addPatient(this.patient);
      this.snackBar.open('Register Succesfull', '', {duration: 1000})
    } else {
      this.snackBar.open('Password and Confirmation Password must be the same', '', {duration: 1000})
    }
    this.patient={dni:'', password:''};
    this.rpassword='';
  }

  login(){
    const userFound = this.loginService.getPatient(this.patient.dni, this.patient.password);
    if (userFound){
      this.snackBar.open('Login Succesfull','',{duration:1000})
    }else {
      this.snackBar.open('Login Failed','',{duration:1000})
    }
  }

  show(){
    console.log("Users: ");
    this.patients = this.loginService.showPatient();
    console.log(this.patients)
  }
}
