import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);
export class RatingBasic {
  constructor() {
  }
}

new RatingBasic();
@Component({
  selector: 'app-new-review-to-doctor',
  templateUrl: './new-review-to-doctor.component.html',
  styleUrls: ['./new-review-to-doctor.component.css'],
})
export class NewReviewToDoctorComponent implements OnInit{
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  doctors: Array<any> = [];
  doctor: any;
  id="" ;
  review: any;
  selectedValue: any;

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

  ratingChanged($event: any) {

  }
}
