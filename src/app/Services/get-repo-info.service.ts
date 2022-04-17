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

  repoResults: Repomodel[] = []

  constructor ( private api: HttpClient ) { }
  

  searchRepo ( repo: string ): Promise<void> {
    return new Promise<void>( ( resolve, reject ) => {
      this.api.get( this.baseUrl + repo, this.options ).toPromise()
        .then( ( data: any ) => {
          
          this.repoResults = data
          resolve()
        
        } ), ( err: string ) => {
          console.error( err )
          reject()
        }
    } )
        
  }
}