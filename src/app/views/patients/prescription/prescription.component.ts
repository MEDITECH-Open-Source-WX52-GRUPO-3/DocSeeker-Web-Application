import {Component, OnInit} from '@angular/core';
import {Prescriptions} from "../../../Interfaces/prescriptions";
import {PrescriptionsService} from "../../../services/prescriptions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit{

  prescription !: Prescriptions;
  medicine!: any;
  meals !: any;

  constructor(
    private prescriptionsService: PrescriptionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getByIdPrescriptions();
  }

  getByIdPrescriptions(){
    const id = parseInt(<string>this.route.snapshot.paramMap.get('id'),10);
    this.prescriptionsService.getById(id).subscribe((response:any)=>{
      console.log(response);
      console.log(id);
      this.prescription = response;
      this.medicine = response["medicines"];
      this.meals = response["meals"];
      console.log(this.medicine);
    })
  }

}
