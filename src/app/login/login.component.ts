import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError:string = "";
  email:string = "";
  password:string = "";

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.loginError = "login functionality is not setup yet fool!"
  }
}

