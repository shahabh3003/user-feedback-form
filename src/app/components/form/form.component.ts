import { InputService } from './../../services/input.service';
import { Component, OnInit } from '@angular/core';
import { InputElements } from 'src/app/services/input.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  public giveInput: boolean = false;

  public inputElements: InputElements = {
    label: "",
    type: "",
  };
  // if we can declare a map here work is easy but trouble using a map
  public inputElementsAr: InputElements[] = [];

  // Takes the input elements from the service and displays them in the form
  public inputElementData: InputElements[] = [];

  constructor(public inputService: InputService) {
    console.log("Form Component Constructor");
   }

  ngOnInit(): void {
    console.log("Form Component Init");
  }

  addInput(){
    let tempObj = {
      label : this.inputElements.label,
      type : this.inputElements.type,
    }
    this.inputElementsAr.push(tempObj);
    // console.log("Input Elements: ", this.inputElementsAr);
    this.inputService.setInputElements(this.inputElementsAr);
    this.getInputData();
    //use if condition and check for the type.
    // console.log(this.inputElementsAr);//objects array
    this.removeInput();
    this.inputService.giveInput = false;
  }

  removeInput(){
    this.inputElements.label = "";
    this.inputElements.type = "";
    this.giveInput = false;
  }

  getInputData(){
    this.inputElementData = this.inputService.getInputElements();
    // console.log("Input Elemens from Service: ", this.inputElementData);
  }

}
