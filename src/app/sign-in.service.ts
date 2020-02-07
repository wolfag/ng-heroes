import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  sendPost(value): Promise<any> {
    const url = "http://localhost:3001/signin";
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = JSON.stringify(value);
    return this.http.post(url, body, httpOptions).toPromise();
  }
}
