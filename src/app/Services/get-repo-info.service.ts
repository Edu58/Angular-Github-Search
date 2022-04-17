import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repomodel } from '../Models/repomodel';

@Injectable( {
  providedIn: 'root'
} )
export class GetRepoInfoService {

  baseUrl: string = 'https://api.github.com/search/repositories?q='
  options: Object = {
    Authorization: environment.Authorization
  }

  repoResults: Array<Repomodel> = []

  constructor ( private api: HttpClient ) { }
  

  searchRepo ( repo: string ): Promise<void> {
    return new Promise<void>( ( resolve, reject ) => {
      this.api.get( this.baseUrl + repo, this.options ).toPromise()
        .then( ( data: any ) => {
          data.items.map( ( obj: any ) => {
            let owner: string = obj.owner.login
            let description!: string
            let repoUrl: string = obj.html_url
            let size: number = obj.size
            let license!: string
            let language: string = obj.language
            let allowForking: boolean = obj.allow_forking
            let visibility: string = obj.visibility
            let forks: number = obj.forks

            if ( obj.license && obj.license.name )
            {
              license = obj.license.name
            }

            if ( obj.description )
            {
              description = obj.description
            }

            this.repoResults.push( new Repomodel( owner, repoUrl, description, size, language, license, allowForking, visibility, forks ) )
        
            resolve()
        
          } ), ( err: string ) => {
            console.error( err )
            reject()
          } 
        } )
        
    }
    )
  }
}