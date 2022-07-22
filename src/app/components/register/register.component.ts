import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log("submit");
    this.router.navigate(['/dashboard']);
  }

}
