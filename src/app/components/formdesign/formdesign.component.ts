import { EventData, InputService } from './../../services/input.service';
import { Component, OnInit } from '@angular/core';
import { InputElements } from 'src/app/services/input.service';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent implements OnInit {

  // Event Details
  eventName: string;
  eventTitle: string;
  body = {};

  eventDetails: EventData[] = [];

  constructor(public inputService: InputService) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    this.inputService.setEventTitle(this.eventTitle);
    this.eventDetails.push({
      event: this.eventName,
      productName: this.eventTitle,
    })
    // console.log("Event Details: ", this.eventDetails);
    this.inputService.setEventDetails(this.eventDetails);
    console.log("Event Details from service: ", this.inputService.getEventDetails());
    const uri = 'http://localhost:8080/configureForm';
    this.body = {
      inputElements: this.inputService.getInputElements(),
      eventDetailsAr: this.eventDetails,
    }
    const res = await fetch(uri,{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(this.body)
      }).catch((err)=>{
          console.log(err);
          window.alert('fetch cant be performed for register');
      });
      console.log("res",res);
    }
}
