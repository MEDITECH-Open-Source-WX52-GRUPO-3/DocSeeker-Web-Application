import {Component, OnInit} from '@angular/core';
import { SourcesService } from '../../../services/sources.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-appointments-patients',
  templateUrl: './appointments-patients.component.html',
  styleUrls: ['./appointments-patients.component.css']
})
export class AppointmentsPatientsComponent  implements OnInit {
  idPatient =""
  medicalInformation: any;
  currentPatient: any;
  patient: any = {};

  constructor(
    private sourcesService: SourcesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['id'];
    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }
    this.sourcesService
      .getSources('medicalInformation')
      .subscribe((data: any) => {
        this.patient = data.find((patient: any) => patient.id.toString() === this.idPatient);
        console.log("Patient: ", this.patient);
      });
  }
}
