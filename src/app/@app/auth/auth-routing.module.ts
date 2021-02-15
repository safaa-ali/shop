import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      {
        path: '', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },

    ]
  },
  {
    path: '',
    redirectTo:'',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo:'',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
