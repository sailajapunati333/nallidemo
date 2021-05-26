import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const localUrl = 'assets/data/db.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getDress():Observable<any> {
    return this.http.get(localUrl);
  }
}
