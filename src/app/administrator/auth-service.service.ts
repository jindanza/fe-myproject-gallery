import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceModel } from './auth-servicemodel';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = 'http://localhost:8080/api/auth/login'

  constructor(private httpClient: HttpClient) { }

  login(data: AuthServiceModel):Observable<any>{
    return this.httpClient.post(this.url, data)
  }
}
