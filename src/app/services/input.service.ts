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

  // map of input elements
  public inputElementsAr: InputElements[] = [];

  constructor() { }

  setInputElements(inputElementsData: InputElements[]){
    this.inputElementsAr = inputElementsData;
  }

  getInputElements(){
    return this.inputElementsAr;
  }
}
