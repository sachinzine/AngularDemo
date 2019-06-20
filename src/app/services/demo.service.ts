import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDemoData } from 'src/models/DemoData';
import { Observable } from 'rxjs';

@Injectable()
export class DemoService {

  url = "/assets/DemoData.json";

  constructor(private http: HttpClient) { }

  getData(): Observable<IDemoData[]> {
    return this.http.get<IDemoData[]>(this.url);
  }

}
