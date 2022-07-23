import { InputService } from './../../services/input.service';
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

  constructor(public inputService: InputService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.inputService.setEventDetails(this.eventName, this.eventTitle);
  }

}
