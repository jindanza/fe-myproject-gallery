import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyprojectService {

  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions: any
  url = 'http://localhost:8080/api/projects'

  getDataMyproject(){
    return this.httpClient.get(this.url, this.httpOptions)
  }
}
