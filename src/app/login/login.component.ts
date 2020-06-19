import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userDetail: FormGroup;
  isSubmited = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Through Form Group
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.maxLength(3)]),
      password: new FormControl('', [Validators.required,Validators.minLength(2)])
    })


    //Through Form Builder
    // this.loginForm = this.fb.group({
    //   username: [''],
    //   password: ['']
    // })
  }
  get getError() {
    return this.loginForm.controls
  }

  onLogin() {
    this.isSubmited = true;
    if(this.loginForm.invalid){
      alert("All fields are required")
    }
    else{
      this.isSubmited = false;
      console.log(this.loginForm.value)
    }
  }

}
