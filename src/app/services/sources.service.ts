import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  apikey: string = '';

  constructor(private http: HttpClient) { }


  // @ts-ignore
  getSources(endpoint: string): Observable<Object>{
    return this.http.get(`http://localhost:3000/${endpoint}`)
  }
}
