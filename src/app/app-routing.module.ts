import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalamanSatuComponent } from './halaman-satu/halaman-satu.component';
import { HalamanDuaComponent } from './halaman-dua/halaman-dua.component';
import { HalamanUtamaComponent } from './halaman-utama/halaman-utama.component';

const routes: Routes = [
  {
    path:'halaman-satu', component:HalamanSatuComponent
  },
  {
    path:'halaman-dua', component:HalamanDuaComponent
  },
  {
    path:'halaman-utama', component:HalamanUtamaComponent
  },
  {
    path:'', redirectTo:'halaman-utama', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
