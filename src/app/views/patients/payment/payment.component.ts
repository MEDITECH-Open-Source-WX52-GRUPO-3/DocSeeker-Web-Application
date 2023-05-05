import {Component, Input, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";

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
  doctors: Array<any> = [];
  doctor: any;
  id="" ;
  popupVisible = false;
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private newsSource: SourcesService, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.newsSource.getSources('doctors').subscribe((data: any): void => {
      this.doctors = data;
      this.doctor = this.doctors.find(doctor => doctor.id == this.id);

      console.log("Sources: ", this.doctor);
      console.log("Sources: ", this.id);

    });


  }
  showPopup() {
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }
}
