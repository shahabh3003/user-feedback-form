import { Injectable } from '@angular/core';

export interface InputElements {
  label : string,
  type : string
}

@Injectable({
  providedIn: 'root'
})
export class InputService {

  inputLabelArr: string[] = [];
  inputTypeArr: string[] = [];
  inputFieldData = {};

  constructor() { }

  setInputLabel(inputLabel: string) {
    this.inputLabelArr.push(inputLabel);
  }

  getInputLabel() {
    return this.inputLabelArr;
  }

  setInputType(inputType: string) {
    this.inputTypeArr.push(inputType);
  }

  getInputType() {
    return this.inputTypeArr;
  }

  setInputFieldData(inputFieldData: any) {
    this.inputFieldData = inputFieldData;
  }

  getInputFieldData() {
    return this.inputFieldData;
  }

}
