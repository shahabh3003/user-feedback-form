import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  scriptContent: string = '';
  showModal: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['/subscriptions']);
  }

  showModalF(){
    this.showModal = true;
  }

  copy(){
    console.log("Copying...");
    this.showModal = false;
  }

  navigateToUserform(){
    this.router.navigate(['/userform']);
  }

}
