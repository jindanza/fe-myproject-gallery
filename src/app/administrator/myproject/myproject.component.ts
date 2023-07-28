import { Component, OnInit } from '@angular/core';
import { MyprojectService } from './myproject.service';
import { MyprojectDeleteModel } from './myprojectdeletemodel';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit {

  dataMyproject: any[] = []; 
  columTable = ['ID', 'Nama', 'Deskripsi', 'Waktu pengerjaan', 'gambar', 'aksi'];
  titlePage = "My Project";
  resStringify: any
  model= new MyprojectDeleteModel()

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

  deleteData(id: MyprojectDeleteModel){
    this.myprojectService.deleteData(id).subscribe(res =>{
      this.resStringify = JSON.stringify(res)
      this.model = JSON.parse(this.resStringify)
      alert(this.model.message)
      this.getDataMyproject()
    })
  }
}