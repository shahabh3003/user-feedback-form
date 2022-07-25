import { Injectable } from '@angular/core';

export interface InputElements {
  label : string,
  type : string
}

export interface EventData {
  eventName: string,
  eventTitle: string
}

@Injectable({
  providedIn: 'root'
})
export class InputService {

  eventName: string;
  eventTitle: string;

  // methods for event details
  public eventData: EventData = {
    eventName: '',
    eventTitle: '',
  }

  public eventDataAr: EventData[] = []

  // setter for Event Details
  setEventDetails(eventDataAr: EventData[]){
    this.eventDataAr = eventDataAr;
  }

  // getter for Event Details
  getEventDetails(){
    return this.eventDataAr;
  }

  setEventTitle(eventTitle: string){
    this.eventTitle = eventTitle;
  }

  getEventTitle(){
    return this.eventTitle;
  }

  showModal = false;
  giveInput = false;

  addInput(){
    this.showModal = true;
    this.giveInput = true;
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
