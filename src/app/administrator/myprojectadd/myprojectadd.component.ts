import { Component } from '@angular/core';
import { MyprojectAddModel } from './myprojectaddmodel';
import { MyprojectaddService } from './myprojectadd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprojectadd',
  templateUrl: './myprojectadd.component.html',
  styleUrls: ['./myprojectadd.component.css']
})
export class MyprojectaddComponent {
  
  title = "add project"
  form = new MyprojectAddModel()
  selectedFile: File | undefined; // Variable untuk menyimpan file gambar yang dipilih

  constructor(
    private myprojectaddService: MyprojectaddService,
    private router: Router
  ){}

  insertData(){
    if (!this.form.nama || !this.selectedFile || !this.form.deskripsi || !this.form.waktu_pengerjaan) {
      console.error("seluruh data harus diisi, tidak boleh kosong");
      alert("Gagal menyimpan data, data harus lengkap")
      return;
    }

    console.log(this.form)
    
    this.myprojectaddService.insertData(this.form, this.selectedFile).subscribe(res => {
      alert("Data berhasil disimpan")
      this.router.navigate(['../admin/myproject'])
      console.log(res)
    })
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.selectedFile = inputElement.files[0];
    }
  }
}
