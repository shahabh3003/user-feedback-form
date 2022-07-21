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

  constructor(public inputService: InputService) { }

  ngOnInit(): void {
  }

  inputFields() {
    console.log('click');
    this.giveInput = true;
  }

  addInput(){
    console.log(this.inputElements);

    let tempObj = {
      label : this.inputElements.label,
      type : this.inputElements.type,
    }
    this.inputElementsAr.push(tempObj);
    this.inputService.setInputElements(this.inputElementsAr);
    this.getInputData();
    //use if condition and check for the type.
    console.log(this.inputElementsAr);//objects array
    this.removeInput();
  }

  removeInput(){
    this.inputElements.label = "";
    this.inputElements.type = "";
    this.giveInput = false;
  }

  getInputData(){
    console.log("Input Element: ", this.inputService.getInputElements());
  }

}
