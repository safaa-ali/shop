// import { GlobalService } from './../../../@core/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;

  registerForm: FormGroup
  isTextFieldType: boolean | undefined;
  constructor (private fb: FormBuilder,) {
    // private _globalService: GlobalService
    this.registerForm = this.fb.group({
      fName: new FormControl('', [Validators.required, Validators.pattern('[a-z]{3,12}')]),
      lName: new FormControl('', [Validators.required, Validators.pattern('[a-z]{3,12}')]),
      email: new FormControl('', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{8,}[\W]{0,}$/)]),
      confirmPassword: new FormControl('', Validators.required)

    }, {
      validator: this.match('password', 'confirmPassword'),

    });
  }
  ngOnInit(): void {
  }
  match(password: any, confirmPassword: any) {
    return (registerForm: FormGroup) => {
      let validPassword = registerForm.controls[password];
      let validConfirmPassword = registerForm.controls[confirmPassword];
      if (validPassword.value !== validConfirmPassword.value) {
        validConfirmPassword.setErrors({ match: true });
      } else {
        validConfirmPassword.setErrors(null)
      }
    }
  }
  onSubmit(form: any) {

    const body = {
      username: form.value.fName + " " + form.value.lName,
      email: form.value.email,
      password: form.value.password,
      repassword: form.value.password,

    }

    // this._globalService.post('register', body).subscribe(res => {
    //   console.log(res);
    // })

this.registerForm.reset()

  }

  // togglePasswordFieldType() {
  //   this.isTextFieldType = !this.isTextFieldType;
  // }
  // toggleConfirmPasswordFieldType() {
  //   this.isTextFieldType = !this.isTextFieldType;
  // }
}
