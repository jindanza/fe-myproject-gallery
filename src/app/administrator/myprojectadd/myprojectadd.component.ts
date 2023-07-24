import { Component } from '@angular/core';
import { MyprojectAddModel } from './myprojectaddmodel';
import { MyprojectaddService } from './myprojectadd.service';

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
    private myprojectaddService: MyprojectaddService 
  ){}

  insertData(){
    if (!this.form.nama || !this.selectedFile) {
      console.error("Nama dan gambar harus diisi.");
      return;
    }

    console.log(this.form)
    this.myprojectaddService.insertData(this.form, this.selectedFile).subscribe(res => {
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
