import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel } from './authmodel';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = 'http://localhost:8080/api/auth/login'

  constructor(private httpClient: HttpClient) { }

  login(data: AuthModel):Observable<any>{
    return this.httpClient.post(this.url, data)
  }
}
