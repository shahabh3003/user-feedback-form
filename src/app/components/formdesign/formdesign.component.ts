import { EventData, InputService } from './../../services/input.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent implements OnInit {

  // Event Details
  eventName: string;
  eventTitle: string;

  eventDetails: EventData[] = [];

  constructor(public inputService: InputService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.inputService.setEventTitle(this.eventTitle);
    this.eventDetails.push({
      eventName: this.eventName,
      eventTitle: this.eventTitle,
    })
    // console.log("Event Details: ", this.eventDetails);
    this.inputService.setEventDetails(this.eventDetails);
    console.log("Event Details from service: ", this.inputService.getEventDetails());
  }

}
