import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataMyproject: any[] = [];
  pagedData: any[] = [];

  ngOnInit(): void {
    this.getDataMyproject();
  }

  constructor( private homeService: HomeService){}

  getDataMyproject() {
    this.homeService.getDataMyproject().subscribe(
      (res: any) => { 
        this.dataMyproject = res.data.map((item: any) => {
          return { ...item, gambar: `http://localhost:8080/${item.gambar.replace('\\', '/')}` };
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
