import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthModel } from './authmodel';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = 'http://localhost:8080/api/auth/login'

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(data: AuthModel):Observable<any>{
    return this.httpClient.post(this.url, data)
  }

  isLoggedIn(): boolean {
    const jwtToken = document.cookie;
    return !!jwtToken;
  }

  redirectToLogin(): void {
    this.router.navigate(['admin/login']);
  }

  logout(): void {
    sessionStorage.clear()
    localStorage.clear()
    // how to delete all cookies
    document.cookie = 'token=; expires=Thu, 1 Jan 1970 00:00:01 GMT;'
    
    this.router.navigate(['']);
  }

}
