import {Component, Input, OnInit} from '@angular/core';
import {SourcesService} from "../../../services/sources.service";

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit{

  @Input() indicators = true;
  selectedIndex= 0;

  news: Array<any> = [];
  currentDoctor: any;

  selectImage(index: number):void{
    this.selectedIndex = index;
  }
  constructor(private newsSource: SourcesService) {
  }
  ngOnInit() {
    this.currentDoctor = localStorage.getItem('currentDoctor');
    if (this.currentDoctor) {
      this.currentDoctor = JSON.parse(this.currentDoctor);
    }
    this.currentDoctor = {
      "id": 0,
      "dni": "9873641",
      "password": "doctorbest",
      "name": "Jose Miguel",
      "area": "Dentist",
      "description": "A responsible doctor who always tries to help those who need it.",
      "patients": 345,
      "years": 25,
      "age": 54,
      "cost": 70.23,
      "photo": "https://www.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-male.jpg",
      "education": [
        {
          "id": 0,
          "name": "PUCP"
        },
        {
          "id": 1,
          "name": "UPC"
        }
      ],
      "hoursAvailable": [
        {
          "id": 0,
          "hours": "9:00 AM - 10:00 AM",
          "booked": true
        },
        {
          "id": 1,
          "hours": "12:00 PM - 14:00 PM",
          "booked": false
        },
        {
          "id": 2,
          "hours": "15:30 PM - 17:00 PM",
          "booked": false
        },
        {
          "id": 3,
          "hours": "17:00 PM - 18:30 PM",
          "booked": false
        },
        {
          "id": 4,
          "hours": "20:00 PM - 21:00 PM",
          "booked": false
        }
      ]
    }
    console.log("User logged: ", this.currentDoctor)

    this.newsSource.getSources('news').subscribe((data:any):void=>{
      this.news = data;
      console.log("News: ", this.news)
    })
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

}
