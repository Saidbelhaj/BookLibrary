import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Classbooks} from "../models/classbooks.model";
import {NgAuthService} from "../ng-auth.service";

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  @Input() tutorial?: Classbooks;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Classbooks = {
    title: '',
    description: '',
    author: '',
    imageUrl:'',
    price:'',
  };
  message = '';
  constructor(private NgAuthService: NgAuthService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };
  }

  updateTutorial(): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description
    };
    if (this.currentTutorial.key) {
      this.NgAuthService.update(this.currentTutorial.key, data)
        .then(() => this.message = 'The Book was updated successfully!')
        .catch(err => console.log(err));
    }
  }
  deleteTutorial(): void {
    if (this.currentTutorial.key) {
      this.NgAuthService.delete(this.currentTutorial.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The Book was delete successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
