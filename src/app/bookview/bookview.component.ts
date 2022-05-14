import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import firebase from "firebase/compat";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {
  user: Observable<firebase.User>;
  books_Firebase_Data :AngularFireList<any>;
  books: Observable<any[]>;
  allBooks: any;
  constructor(private fa:AngularFireAuth,
              public db: AngularFireDatabase) {
    this.user = this.fa.user;
  }

  ngOnInit(): void {
    this.books_Firebase_Data= this.db.list('/books');
    this.books=this.books_Firebase_Data.valueChanges();
  }


}
