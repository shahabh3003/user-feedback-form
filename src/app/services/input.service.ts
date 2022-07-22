import { Injectable } from '@angular/core';

export interface InputElements {
  label : string,
  type : string
}

@Injectable({
  providedIn: 'root'
})
export class InputService {

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
