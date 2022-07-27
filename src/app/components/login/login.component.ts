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
    if(this.username && this.password){
      const uri = 'http://localhost:8080/login';
      this.body = {
        username: this.username,
        password: this.password
      }
      this.requestOptions = {
        method: 'POST',
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(this.body),
      };
      fetch(uri, this.requestOptions)
        .then(response => {
          console.log("success: ", response);
          response.text();
          if(response.status === 200){
            this.authService.setUsername(this.username);
            alert("Login Successful");
            this.router.navigate(['/subscriptions',{
              username: this.username
            }]);
          }else{
            alert("Login Failed");
            window.location.reload();
          }
        })
        .catch(error => {
          alert(error.message);
          console.log("error: ",error);
          this.router.navigate(['/']);
        });
    }else{
      alert("Please enter username and password");
    }
  }
}
