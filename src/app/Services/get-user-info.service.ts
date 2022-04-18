import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../Models/repouser';

@Injectable({
  providedIn: 'root'
})
export class GetUserInfoService {

  users: User[] = []

  baseUrl: string = 'https://api.github.com/search/users?q=' 
  
  options: Object = {
    Authorization: environment.Authorization
  }

  constructor ( private http: HttpClient ) { }
  
  searchUser (user: string) {
    return new Promise<void>( ( resolve, reject ) => {
      this.http.get( this.baseUrl + user, this.options ).toPromise()
        .then( ( data: any ) => {
          
          this.users = data
          resolve()
        } ), ( error: any )=> {
          console.error( error )
          reject()
      }
    })
  }
}
