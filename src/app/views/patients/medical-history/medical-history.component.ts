import { Component, OnInit } from '@angular/core';
import { SourcesService } from '../../../services/sources.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../interfaces/patient';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {
  medicalInformation: any[] = [];
  patientId: number | undefined;
  patients: Patient[] = [];

  constructor(
    private sourcesService: SourcesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sourcesService
      .getSources('medicalInformation')
      .subscribe((data: any) => {
        this.medicalInformation = data;
        console.log("Medical Information: ", this.medicalInformation);
      });

    this.sourcesService.getSources('patients').subscribe((data: any): void => {
      this.patients = data;
    });

    this.route.paramMap.subscribe(params => {
      this.patientId = Number(params.get('id'));
    });
  }

  getMedicalHistoryByPatientId(): any[] {
    return this.medicalInformation
      .filter(history => history.idPatient === this.patientId)
      .map(history => {
        const patient = this.patients.find(p => p.id === history.idPatient);
        return { ...history, patientName: patient ? patient.name : '' };
      });
  }
  getPatientPhotoById(id: number): string {
    const patient = this.patients.find(p => p.id === id);
    return patient ? patient.photo : '';
  }
}
