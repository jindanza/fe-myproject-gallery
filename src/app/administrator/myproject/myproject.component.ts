import { Component, OnInit } from '@angular/core';
import { MyprojectService } from './myproject.service';
import { MyprojectDeleteModel } from './myprojectdeletemodel';
import { AuthServiceService } from '../auth-service.service';

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

  constructor(private myprojectService: MyprojectService, private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.getDataMyproject();
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.redirectToLogin();
      alert("anda harus login terlebih dahulu")
    }
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