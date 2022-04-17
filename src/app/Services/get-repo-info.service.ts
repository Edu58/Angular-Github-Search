import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetRepoInfoService {

  baseUrl: string = 'https://api.github.com/search/repositories?q=' 
  options: Object = {
    Authorization: environment.Authorization
  }

  constructor ( private api: HttpClient ) { }
  

  searchRepo ( repo: string ) {
    let results: Array<Object>
    const promise: Promise<Object | undefined> = this.api.get( this.baseUrl + repo, this.options ).toPromise()
    
    promise.then( (data: any) => {
      console.log(data.items)
    })
  }
}
