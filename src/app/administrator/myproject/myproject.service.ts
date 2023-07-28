import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyprojectDeleteModel } from './myprojectdeletemodel';

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

  deleteData(id: MyprojectDeleteModel){
    return this.httpClient.delete(this.url + '/' + id)
  }
}
