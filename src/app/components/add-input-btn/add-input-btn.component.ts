import { InputService } from './../../services/input.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-input-btn',
  templateUrl: './add-input-btn.component.html',
  styleUrls: ['./add-input-btn.component.css']
})
export class AddInputBtnComponent implements OnInit {

  constructor(public inputService: InputService) { }

  ngOnInit(): void {
  }

  inputFields(){
    this.inputService.addInput();
  }

}
