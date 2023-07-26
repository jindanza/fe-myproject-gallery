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
    private myprojecteditService : MyprojecteditService
  ){}
  
  id: any
  form = new MyprojectEditModel
  dataView: any

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getViewId()
  }

  getViewId(){
    this.myprojecteditService.getViewId(this.id).subscribe(res =>{
      this.dataView = res
      this.form = this.dataView
    })
  }
}
