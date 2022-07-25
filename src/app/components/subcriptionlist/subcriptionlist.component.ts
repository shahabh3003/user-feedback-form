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

  constructor(public router: Router, public inputService: InputService) {
    this.subscriptionList = this.inputService.getEventDetails();
    console.log("Subscription List: ", this.subscriptionList);
  }

  ngOnInit(): void {
    this.subscriptionList = this.inputService.getEventDetails();
    console.log("Subscription List: ", this.subscriptionList);
  }

  addNew() {
    this.router.navigate(['/dashboard']);
  }

}
