import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  prescriptions: Array<any> = [];
  prescription: any;
  id = "";
  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private prescriptionsSource: SourcesService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.prescriptionsSource.getSources('prescriptions').subscribe((data: any): void =>{
      this.prescriptions = data;
      this.prescription = this.prescriptions.find(prescription => prescription.id == this.id);

      console.log("Sources: ", this.prescription);
      console.log("Sources: ", this.id);
    });
  }



}
