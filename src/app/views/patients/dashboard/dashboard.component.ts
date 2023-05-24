import {Component, Input, OnInit} from '@angular/core';
import {SourcesService} from "../../../services/sources.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  currentPatient: any;

  @Input() indicators = true;
  selectedIndex= 0;

  news: Array<any> = [];

  selectImage(index: number):void{
    this.selectedIndex = index;
  }
  constructor(private newsSource: SourcesService) {
  }
  ngOnInit() {
    const currentPatient = localStorage.getItem('currentPatient');
    if (currentPatient) {
      this.currentPatient = JSON.parse(currentPatient);
    }
    console.log("User logged: ", this.currentPatient)

    this.newsSource.getSources('news').subscribe((data:any):void=>{
      this.news = data;
      console.log("News: ", this.news)
    })
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

}
