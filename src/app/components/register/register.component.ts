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
    if(this.username && this.password){
      const uri = 'http://localhost:8080/register';
      this.body = {
        username: this.username,
        password: this.password
      }
    const res = await fetch(uri,{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(this.body)
      }).then(response => {
        console.log("success: ", response);
        response.text();
        if(response.status === 201){
          alert("Registeration Successful");
          this.router.navigate(['/']);
        }else{
          alert("Registeration Failed");
          window.location.reload();
        }
      }).catch((err)=>{
          console.log(err);
          window.alert('fetch cant be performed for register');
          alert(err.message);
          this.router.navigate(['/']);
      });
    }else{
      alert("Please enter username and password");
    }

  }
}
