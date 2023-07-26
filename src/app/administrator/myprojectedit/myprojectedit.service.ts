import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyprojectEditModel } from './myprojecteditmodel';

@Injectable({
  providedIn: 'root'
})
export class MyprojecteditService {

  url = 'http://localhost:8080/api/projects'

  constructor(
    private httpClient: HttpClient
  ) { }

    getViewId(id: MyprojectEditModel){
      return this.httpClient.get(this.url + '/' + id)
    }
}
