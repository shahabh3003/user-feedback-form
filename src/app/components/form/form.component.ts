import { InputService } from './../../services/input.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  giveInput: boolean = false;
  inputType: string = '';
  inputLabel: string = '';
  inputTypeArr: string[] = [];
  inputLabelArr: string[] = [];
  inputFieldData: any = {};

  constructor(public inputService: InputService) { }

  ngOnInit(): void {
  }

  inputFields() {
    console.log('click');
    this.giveInput = true;
  }

  addInput(){
    this.inputService.setInputLabel(this.inputLabel);
    this.inputService.setInputType(this.inputType);
    this.giveInput = false;
    this.inputLabel = '';
    this.inputType = '';
    this.inputLabelArr = this.inputService.getInputLabel();
    console.log(this.inputLabelArr);
    this.inputTypeArr = this.inputService.getInputType();
  }

}
