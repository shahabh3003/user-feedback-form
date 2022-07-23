import { Injectable } from '@angular/core';

export interface InputElements {
  label : string,
  type : string
}

@Injectable({
  providedIn: 'root'
})
export class InputService {

  eventName: string;
  eventTitle: string;

  showModal = false;
  giveInput = false;

  addInput(){
    this.showModal = true;
    this.giveInput = true;
  }

  // setter for Event Details
  setEventDetails(eventName: string, eventTitle: string){
    this.eventName = eventName;
    this.eventTitle = eventTitle;
  }

  // getter for Event Details
  getEventDetails(){
    return {
      eventName: this.eventName,
      eventTitle: this.eventTitle
    }
  }

  public inputElements: InputElements = {
    label: "",
    type: "",
  };
  // if we can declare a map here work is easy but trouble using a map
  public inputElementsAr: InputElements[] = [];

  constructor() { }

  setInputElements(inputElementsData: InputElements[]){
    this.inputElementsAr = inputElementsData;
    //console.log("Input Elements from service: ", this.inputElementsAr);
  }

  getInputElements(){
    return this.inputElementsAr;
  }
}
