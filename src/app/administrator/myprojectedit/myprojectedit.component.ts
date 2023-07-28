import { Component, OnInit } from '@angular/core';
import { MyprojecteditService } from './myprojectedit.service';
import { MyprojectEditModel } from './myprojecteditmodel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myprojectedit',
  templateUrl: './myprojectedit.component.html',
  styleUrls: ['./myprojectedit.component.css']
})
export class MyprojecteditComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private myprojectEditService : MyprojecteditService
  ){}
  
  id: any
  form = new MyprojectEditModel()
  dataView: any
  selectedFile: File | undefined;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewId()
  }

  getViewId(){
    this.myprojectEditService.getViewId(this.id).subscribe(res =>{
      this.dataView = res
      this.form = this.dataView.data
      console.log(this.form)
    })
  }

  updateData() {
    console.log("id di dapat: " + this.id);
    console.log("form di dapat: ", this.form);
    
    if (this.selectedFile) {
      this.myprojectEditService.updateDataWithImage(this.id, this.form, this.selectedFile).subscribe(res => {
        console.log(res);
        this.router.navigate(['../admin/myproject']);
      });
    } else {
      this.myprojectEditService.updateDataWithoutImage(this.id, this.form).subscribe(res => {
        console.log(res);
        this.router.navigate(['../admin/myproject']);
      });
    }
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.selectedFile = inputElement.files[0];
    }
  }
}
