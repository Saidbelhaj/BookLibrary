import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {BooksComponent} from "./books/books.component";

import {AddBookComponent} from "./add-book/add-book.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {BookdetailComponent} from "./bookdetail/bookdetail.component";
import {BookviewComponent} from "./bookview/bookview.component";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  {path: 'books', component:BooksComponent},
  {path: 'add-book', component:AddBookComponent},
  {path:'bookview', component:BookviewComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'bookdetail', component:BookdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
