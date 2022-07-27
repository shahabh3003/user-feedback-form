import { EventData, InputService } from './../../services/input.service';
import { Component, OnInit } from '@angular/core';
import { InputElements } from 'src/app/services/input.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent implements OnInit {

  // Event Details
  eventName: string;
  eventTitle: string;
  cadence: number;
  body = {};

  eventDetails: EventData[] = [];

  constructor(public inputService: InputService,
    public authService: AuthService) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    this.inputService.setScript(true);
    console.log("Show Script: ", this.inputService.getScript());
    this.inputService.setEventTitle(this.eventTitle);
    this.eventDetails.push({
      event: this.eventName,
      productName: this.eventTitle,
    })
    // console.log("Event Details: ", this.eventDetails);
    this.inputService.setEventDetails(this.eventDetails);
    //console.log("Event Details from service: ", this.inputService.getEventDetails());
    const uri = 'http://localhost:8080/configureForm';
    this.body = {
      username: this.authService.getUsername(),
      inputElements: this.inputService.getInputElements(),
      eventDetailsAr: this.eventDetails,
      cadence: this.cadence,
    }
    const res = await fetch(uri,{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(this.body)
      })
      .then(res => res.json())
      .then(res => {
        //console.log("Success response: ", res);
      })
      .catch((err)=>{
          console.log(err);
          alert('fetch cant be performed for formdesign');
      });
    }
}
