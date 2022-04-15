import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRepoInfoService {

  baseUrl: string = 'https://api.github.com/search/users?q=' 
  options: Object = {
    Authorization: environment.Authorization
  }

  constructor ( private http: HttpClient ) { }
  
  searchUser (user: string): Observable<Object> {
    return this.http.get(this.baseUrl + user, this.options)
  }
}
