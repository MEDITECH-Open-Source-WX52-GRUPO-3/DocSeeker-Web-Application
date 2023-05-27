import {Component, Input, OnInit} from '@angular/core';
import {map, Observable, shareReplay, Subscription} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";
import {SaveAppointmentService} from "../../../services/save-appointment.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  //CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  dates: Array<any> = [];
  doctors: Array<any> = [];
  doctor: any;
  currentPatient: any;
  id="" ;
  popupVisible = false;
  newAppointment: any;
  private agregarObjetoSubscription: Subscription;

  constructor(private interactionService: SaveAppointmentService, private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private router: Router) {
    this.agregarObjetoSubscription = this.interactionService.addAppointment$.subscribe(() => {
      this.addAppointment();
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }

    this.newsSource.getSources('doctors').subscribe((data: any): void => {
      this.doctors = data;
      this.doctor = this.doctors.find(doctor => doctor.id == this.id);

      console.log("Sources: ", this.doctor);
      console.log("Sources: ", this.id);

    });


  }
  addAppointment(){
    this.newsSource.getSources('dates').subscribe((data: any): void => {
      this.dates = data;
      console.log("SIZE OF DATES: ", this.dates.length);
    });
    this.newAppointment = {
      "id": this.dates.length,
      "idPatient": parseInt(this.currentPatient.id),
      "doctorId": parseInt(this.route.snapshot.params['id']),
      "date": this.route.snapshot.params['idDate'],
      "hourId": parseInt(this.route.snapshot.params['idHours'])
    }
    this.newsSource.postSources('dates', this.newAppointment).subscribe((data: any): void => {

      console.log("CITA REGISTRADA");

    });
  }
  showPopup() {
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }
}
