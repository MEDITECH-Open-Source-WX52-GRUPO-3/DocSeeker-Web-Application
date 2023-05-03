import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {SourcesService} from "../../../services/sources.service";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit{
  //CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  doctors: Array<any> = [];
  doctor: any;
  id="" ;
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
}
