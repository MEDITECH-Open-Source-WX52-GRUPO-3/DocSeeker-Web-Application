import { Component } from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";

@Component({
  selector: 'app-new-medical-history',
  templateUrl: './new-medical-history.component.html',
  styleUrls: ['./new-medical-history.component.css']
})
export class NewMedicalHistoryComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  patients: Array<any> = [];
  patient: any;
  medicalHistories: Array<any> = [];
  medicalHistory: any;
  id="" ;
  review: any;

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.newsSource.getSources('medicalHistory').subscribe((data: any): void => {
      this.medicalHistories = data;
      this.medicalHistory = this.medicalHistories.find(medicalHistory => medicalHistory.id == this.id);
      console.log("Medical History: ", this.medicalHistory);

      if (this.medicalHistory) {
        this.newsSource.getSources('patients').subscribe((data: any): void => {
          this.patients = data;
          this.patient = this.patients.find(patient => patient.id == this.medicalHistory.idPatient);
          console.log("Patient: ", this.patient);
        });
      }
    });
  }
}
