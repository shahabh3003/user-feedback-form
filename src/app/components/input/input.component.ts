import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  public inputLabel="";

  @Input()
  public inputType="";

  constructor() { }

  ngOnInit(): void {
  }

}
