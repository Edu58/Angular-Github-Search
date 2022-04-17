import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Repomodel } from 'src/app/Models/repomodel';
import { User } from 'src/app/Models/repouser';
import { GetRepoInfoService } from 'src/app/Services/get-repo-info.service';
import { GetUserInfoService } from 'src/app/Services/get-user-info.service';

@Component( {
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
} )
export class SearchComponent implements OnInit {

  resultsFromSearch!: Repomodel[]
  userResults!: User[]

  constructor ( private userApi: GetUserInfoService, private repoApi: GetRepoInfoService ) { }

  ngOnInit (): void {
  }

  getTheUser ( form: NgForm ) {
    this.userApi.searchUser( form.value.username ).then(
      () => {
        this.resultsFromSearch.splice(1, this.resultsFromSearch.length)
        this.userResults = this.userApi.users
        console.log(this.userResults)
      }
    )
  }

  getRepo ( form: NgForm ) {
    this.repoApi.searchRepo( form.value.repo ).then(
      () => {
        this.userResults.splice(1, this.userResults.length)
        this.resultsFromSearch = this.repoApi.repoResults
        console.log(this.resultsFromSearch)
      }
    )
  }
}