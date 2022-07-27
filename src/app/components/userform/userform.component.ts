import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  requestOptions = {};
  body = {};
  userFormData: any;
  questions: any;
  id: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log("Query Params: ", params);
      this.id = params;
    });
    this.fetchData();
  }



  fetchData() {
    const uri = 'http://localhost:8080/getForm';
    this.body = {
      id: this.id,
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
      .then(response => response.json())
      .then(result => {
        this.userFormData = result;
        this.questions = this.userFormData.questions;
        console.log("Userform data: ", this.userFormData);
      })
      .catch(error => console.log('error', error));
  }

  submit(){
    alert("Submitted");
  }

  ngOnInit(): void {
  }

}
