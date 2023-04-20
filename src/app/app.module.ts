import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import {MaterialModule} from "./shared/material.module";
import {CardViewDemoComponent} from "./components/card-view-demo/card-view-demo.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from "@angular/forms";
import {GithubUsersComponent} from "./components/github-users/github-users.component";
import {HttpClientModule} from "@angular/common/http";
import { CommunicationComponent } from './components/communication/communication.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CardViewDemoComponent,
    GithubUsersComponent,
    CommunicationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
