import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyprojectEditModel } from './myprojecteditmodel';

@Injectable({
  providedIn: 'root'
})
export class MyprojecteditService {

  url = 'http://localhost:8080/api/projects';

  constructor(private httpClient: HttpClient) {}

  getViewId(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  updateDataWithImage(id: any, data: MyprojectEditModel, imageFile: File) {
    const formData = new FormData();
    formData.append('nama', data.nama);
    formData.append('deskripsi', data.deskripsi);
    formData.append('waktu_pengerjaan', data.waktu_pengerjaan);
    formData.append('gambar', imageFile);

    return this.httpClient.put(`${this.url}/${id}`, formData);
  }

  updateDataWithoutImage(id: any, data: MyprojectEditModel) {
    return this.httpClient.put(`${this.url}/${id}`, data);
  }
}
