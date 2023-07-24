import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyprojectComponent } from './myproject/myproject.component';
import { SettingsComponent } from './settings/settings.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyprojectaddComponent } from './myprojectadd/myprojectadd.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {
    path: '', component:MainComponent,
    children:[
      {
        path: '',
        redirectTo: '/admin/home',
        pathMatch: 'full'
      },
      {
        path: 'home', component:HomeComponent

      },
      {
        path: 'myproject', component:MyprojectComponent

      },
      {
        path: 'settings', component:SettingsComponent

      },
      {
        path: 'add-projects', component:MyprojectaddComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MyprojectComponent,
    SettingsComponent,
    MyprojectaddComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    RouterModule.forChild(routes)
  ]
})
export class AdministratorModule { }
