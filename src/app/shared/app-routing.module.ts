import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import {RouterModule} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {CardViewDemoComponent} from "../components/card-view-demo/card-view-demo.component";
import {GithubUsersComponent} from "../components/github-users/github-users.component";
const routes = [
  {path:"",component:HomeComponent},
  {path:"users",component:UsersComponent},
  {path:"card-view",component:CardViewDemoComponent},
  {path:"gitusers",component:GithubUsersComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
