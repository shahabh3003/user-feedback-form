import { Injectable } from '@angular/core';

export interface InputElements {
  label : string,
  type : string
}

@Injectable({
  providedIn: 'root'
})
export class InputService {

  public inputElements: InputElements = {
    label: "",
    type: "",
  };
  // if we can declare a map here work is easy but trouble using a map
  public inputElementsAr: InputElements[] = [];

  constructor() { }

  setInputElements(inputElementsData: InputElements[]){
    this.inputElementsAr = inputElementsData;
  }

  getInputElements(){
    return this.inputElements;
  }
}
