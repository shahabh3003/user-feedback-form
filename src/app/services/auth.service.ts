import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string;
  requestOptions = {};

  setUsername(username: string){
    this.username = username;
  }

  getUsername(){
    return this.username;
  }

  fetchUsername(){
    let uri = 'http://localhost:8080/tempUser';
    this.requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    //console.log("Request Options: ", this.requestOptions);
    fetch(uri, this.requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log("Username: ", result);
        this.setUsername(result);
      })
      .catch(error => console.log('error', error));
  }

  constructor() { }
}
