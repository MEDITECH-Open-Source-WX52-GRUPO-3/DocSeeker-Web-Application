import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Prescriptions} from "../../../Interfaces/prescriptions";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PrescriptionsService} from "../../../services/prescriptions.service";

@Component({
  selector: 'app-list-prescription',
  templateUrl: './list-prescription.component.html',
  styleUrls: ['./list-prescription.component.css']
})
export class ListPrescriptionComponent implements OnInit, AfterViewInit{

  prescriptionData !: Prescriptions;
  dataSource !: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'dateIssue', 'dateExpiration', 'medicalSpeciality', 'recipCode', 'condition', 'action'];

  @ViewChild(MatPaginator, { static: true }) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private prescriptionService: PrescriptionsService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.getAllPrescriptions();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getAllPrescriptions(){
    this.prescriptionService.getAll().subscribe((response: any)=>{
      this.dataSource.data =response;
    })
  }

  getCustomersById(id:number){
    this.prescriptionService.getById(id).subscribe((response: any)=>{
      console.log(response);
      this.dataSource.data = response;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
