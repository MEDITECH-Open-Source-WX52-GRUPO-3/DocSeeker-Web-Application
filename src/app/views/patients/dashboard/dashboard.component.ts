import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  currentPatient: any;

  constructor() {
  }
  ngOnInit() {
    const currentPatient = localStorage.getItem('currentPatient');
    if (currentPatient) {
      this.currentPatient = JSON.parse(currentPatient);
    }
    console.log("User logged: ", this.currentPatient)
  }
}
