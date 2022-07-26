import { AuthService } from './../../services/auth.service';
import { InputService, EventData } from './../../services/input.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcriptionlist',
  templateUrl: './subcriptionlist.component.html',
  styleUrls: ['./subcriptionlist.component.css']
})
export class SubcriptionlistComponent implements OnInit {

  subscriptionList: EventData[] = [];
  username = this.authService.username;
  body = {};
  requestOptions = {};
  myHeaders = new Headers();

  fetchData() {
    const uri = 'http://localhost:8080/adminForms';
    this.body = {
      username: this.username,
    }
    console.log("Body: ", this.body);
    this.requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.body),
      redirect: 'follow'
    };
    //console.log("Request Options: ", this.requestOptions);
    fetch(uri, this.requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log("success: ", result);
        this.subscriptionList = JSON.parse(result);
        console.log("Subscription List: ", this.subscriptionList);
      })
      .catch(error => console.log('error', error));
  }

  constructor(public router: Router, public inputService: InputService, 
    public authService: AuthService,
    
    ) {
    //this.username = this.authService.getUsername();
    console.log("Username: ", this.username);
    this.fetchData();
  }

  ngOnInit(): void {
  }

  addNew() {
    this.router.navigate(['/dashboard']);
  }

}
