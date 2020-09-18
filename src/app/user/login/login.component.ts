import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {  }

  public login(userData: string): void {
    const users: string[] = JSON.parse(localStorage.getItem('users'));
    if (users.findIndex(el => el === userData)) {
      alert('logado');
    } else {
      this.loginForm.setErrors({invalid: true});
    }
  }

}
