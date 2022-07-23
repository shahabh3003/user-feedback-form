import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcriptionlist',
  templateUrl: './subcriptionlist.component.html',
  styleUrls: ['./subcriptionlist.component.css']
})
export class SubcriptionlistComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  addNew() {
    this.router.navigate(['/dashboard']);
  }

}
