import { GlobalService } from './../../../@core/global.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (
    private fb: FormBuilder,
    private _globalService: GlobalService,
    private router: Router

  ) {

  }



  user = {
    username: '',
    password: ''
  };


  onSubmit(user: any) {
    console.log(user.value);
    const data = user.value

    this._globalService.post('login', data).subscribe(res => {
      localStorage.setItem('token', JSON.stringify(res))
      console.log(res);
      this.router.navigate(['./home'])
    })

    this.router.navigate(['./home'])

  }
  register() {
    this.router.navigate(['auth/register'])
  }

}


