import { Component, OnInit } from '@angular/core';
import {NgAuthService} from "../ng-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser
  constructor(public ngAuthService: NgAuthService,private route:Router) {
      this.ngAuthService.user.subscribe(user=>{
      if(user){
        this.isUser=true
      }else{
        this.isUser=false
      }}
      )}
  ngOnInit(): void {
  }

}
