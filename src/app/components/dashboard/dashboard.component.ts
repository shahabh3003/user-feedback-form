import { InputService } from './../../services/input.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  scriptContent: string = '';
  showModal: boolean = this.inputService.getScript();

  constructor(public router: Router, public inputService: InputService) { }

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
