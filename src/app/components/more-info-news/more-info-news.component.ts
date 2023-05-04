import {Component, Input} from '@angular/core';
import {NewsService} from "../../services/news.service";

@Component({
  selector: 'app-more-info-news',
  templateUrl: './more-info-news.component.html',
  styleUrls: ['./more-info-news.component.css']
})
export class MoreInfoNewsComponent {
  @Input() id!:number;
  @Input() imageNews!:string;
  @Input() title!:string;
  @Input() description!:string;
  @Input() info!:string;
  @Input() view!:string;

  @Input() newsList: any;




}
