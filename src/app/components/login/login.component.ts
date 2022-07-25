import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  body = {};
  requestOptions = {};

  constructor(public router: Router, public authService: AuthService) { }


  ngOnInit(): void {
  }

  submit(){
    console.log("submit");
    const uri = 'http://localhost:8080/login';
    this.body = {
      username: this.username,
      password: this.password
    }
    this.requestOptions = {
      method: 'POST',
      headers: new Headers(),
      body: this.body,
      redirect: 'follow'
    };
    fetch(uri, this.requestOptions)
      .then(response => response.text())
      .then(result => {
        //console.log("success: ",result);
        this.authService.setUsername(this.username);
        this.router.navigate(['/subscriptions']);
      })
      .catch(error => console.log('error', error));
  }
}
