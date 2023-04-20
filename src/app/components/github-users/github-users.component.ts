import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})

export class GithubUsersComponent {

  public readonly GIT_USERS_URL = "https://api.github.com/users"
  users: IUsers[] = [];
  constructor(private http: HttpClient) {
    this.http.get<IUsers[]>(this.GIT_USERS_URL).subscribe(users => {
      this.users = users
    })

  }


}

export interface IUsers {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}
