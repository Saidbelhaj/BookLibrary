import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map, Observable} from "rxjs";
import firebase from "firebase/compat";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {Classbooks} from "../models/classbooks.model";
import {NgAuthService} from "../ng-auth.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 // user: Observable<firebase.User>;
  //books_Firebase_Data :AngularFireList<any>;


 // books: Observable<any[]>;
 // allBooks: any;
  tutorials?: Classbooks[];
  currentTutorial?: Classbooks;
  currentIndex = -1;
  title = '';
  constructor(private NgAuthService: NgAuthService){
   // this.user=this.fa.user;


   }

  ngOnInit(): void {
   // this.books_Firebase_Data= this.db.list('/books');

    //* get android observable ngfor

    //this.books=this.books_Firebase_Data.valueChanges();
    this.retrieveTutorials();
  }
  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.NgAuthService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
    });
  }
  setActiveTutorial(tutorial: Classbooks, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  removeAllTutorials(): void {
    this.NgAuthService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
