import { Injectable } from '@angular/core';
import { httpClient, HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {
  _url = '';
  constructor(private _http: HttpClient) { 
  enroll(user: User){
    this._http.post<any>(this._url, user);

  }
  }
}
