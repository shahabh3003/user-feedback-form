import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string;

  setUsername(username: string){
    this.username = username;
  }

  getUsername(){
    return this.username;
  }
  constructor() { }
}
