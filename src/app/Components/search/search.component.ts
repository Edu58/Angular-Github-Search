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

  resultsFromSearch: any = []

  constructor ( private userApi: GetUserInfoService, private repoApi: GetRepoInfoService) { }

  ngOnInit (): void {
  }

  getTheUser ( form: NgForm ) {

    this.userApi.searchUser( form.value.username ).then(
      () => {

        this.resultsFromSearch.splice(0, this.resultsFromSearch.length)

        let response: any = this.userApi.users

        response.items.map( ( obj: any ) => {
            let name: string = obj.login
            let avatar: string = obj.avatar_url
            let profile: string = obj.html_url

          this.resultsFromSearch.push( new User( name, avatar, profile ) )

          })
      }
    )
  }

  getRepo ( form: NgForm ) {

    this.repoApi.searchRepo( form.value.repo ).then(
      () => {

        this.resultsFromSearch.splice(0, this.resultsFromSearch.length)

        let data: any = this.repoApi.repoResults

        data.items.map( ( obj: any ) => {
          let name: string = obj.name
          let owner: string = obj.owner.login
          let description!: string
          let repoUrl: string = obj.html_url
          let size: number = obj.size
          let license!: string
          let language: string = obj.language
          let allowForking: boolean = obj.allow_forking
          let visibility: string = obj.visibility
          let forks: number = obj.forks
          let created: Date = new Date( obj.created_at )
          let updated: Date = new Date(obj.updated_at)

          if ( obj.license && obj.license.name )
          {
            license = obj.license.name
          }

          if ( obj.description )
          {
            description = obj.description
          }

          this.resultsFromSearch.push( new Repomodel( name, owner, repoUrl, description, size, language, license, allowForking, visibility, forks,created, updated ) )
        }
        )
      }
    )
  }
}