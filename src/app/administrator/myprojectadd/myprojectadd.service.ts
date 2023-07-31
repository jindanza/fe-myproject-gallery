import { Injectable } from '@angular/core';
import { MyprojectAddModel } from './myprojectaddmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { handleToken } from 'src/utils/helpers';

@Injectable({
  providedIn: 'root'
})
export class MyprojectaddService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = "http://localhost:8080/api/projects"

  insertData(data: MyprojectAddModel, gambarFile: File) {
    const formData = new FormData();
    formData.append('nama', data.nama);
    formData.append('deskripsi', data.deskripsi);
    formData.append('waktu_pengerjaan', data.waktu_pengerjaan);
    formData.append('gambar', gambarFile);

    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post<any>(this.url, formData, { headers: handleToken() });
  }
}
