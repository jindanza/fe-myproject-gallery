import { Component, OnInit } from '@angular/core';
import { MyprojectService } from './myproject.service';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {

  dataMyproject: any[] = []; 
  columTable = ['ID', 'Nama', 'Deskripsi', 'Waktu pengerjaan', 'gambar', 'aksi'];
  titlePage = "My Project";

  constructor(private myprojectService: MyprojectService) {}

  ngOnInit(): void {
    this.getDataMyproject();
  }

  getDataMyproject() {
    this.myprojectService.getDataMyproject().subscribe(
      (res: any) => { 
        this.dataMyproject = res.data.map((item: any) => {
          return { ...item, gambar: `http://localhost:8080/${item.gambar.replace('\\', '/')}` };
        });
        console.log(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}