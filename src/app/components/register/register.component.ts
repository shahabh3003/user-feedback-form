import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  body = {};
  username: string;
  password: string;
  requestOptions = {};

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  async submit(){
    //console.log("submit", this.username," : ", this.password);
    const uri = 'http://localhost:8080/register';
    this.body = {
      username: this.username,
      password: this.password
    }
  //   this.requestOptions = {
  //     method: 'POST',
  //     headers: new Headers(),
  //     body: this.body,
  //     redirect: 'follow'
  //   };
  //   console.log("body: ", this.body);
  //   fetch(uri, this.requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       console.log("success: ",result);
  //       this.router.navigate(['/subscriptions']);
  //     })
  //     .catch(error => console.log('error', error));
  // }
  const res = await fetch(uri,{
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body:JSON.stringify(this.body)
    }).catch((err)=>{
        console.log(err);
        window.alert('fetch cant be performed for register');
        alert(err.message);
        this.router.navigate(['/']);
    });
    console.log("res",res);
    alert("registeration success");
    this.router.navigate(['/']);
  }
}
