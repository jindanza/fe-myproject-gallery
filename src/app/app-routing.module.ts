import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:()=>import('./visitor/visitor.module').then(mod=>mod.VisitorModule)
  },
  {
    path: 'admin',
    loadChildren:()=>import('./administrator/administrator.module').then(mod=>mod.AdministratorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
