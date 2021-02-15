import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './@core/auth.guard';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo:'auth',
  //   pathMatch: 'full',
  // },
  {
    path:'auth',
    loadChildren:()=>import('./@app/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./@app/home/home.module').then(m=>m.HomeModule),
    canActivate:[AuthGuard]
  },
  // {
  //   path: '**',
  //   redirectTo: 'auth',
  //   pathMatch: 'full',
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
