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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyprojecteditComponent } from './myprojectedit/myprojectedit.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const routes : Routes = [
  {
    path: 'login', component:LoginComponent,
  },
  {
    path: '', component:MainComponent,
    children:[
      {
        path: '',
        redirectTo: '/admin/login',
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
      },
      {
        path: 'edit-projects/:id', component:MyprojecteditComponent
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
    MyprojectaddComponent,
    MyprojecteditComponent,
    LoginComponent
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
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
  ]
})
export class AdministratorModule { }
