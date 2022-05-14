import { Component, OnInit } from '@angular/core';
import {Classbooks} from "../models/classbooks.model";
import {NgAuthService} from "../ng-auth.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  tutorial: Classbooks = new Classbooks();
  submitted = false;
  constructor(private NgAuthService: NgAuthService) { }

  ngOnInit(): void {
  }
  saveTutorial(): void {
    this.NgAuthService.create(this.tutorial).then(() => {
      console.log('Created new Book successfully!');
      this.submitted = true;
    });
  }
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Classbooks();
  }
}
