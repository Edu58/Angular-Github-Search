import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { GetRepoInfoService } from 'src/app/Services/get-repo-info.service';
import { GetUserInfoService } from 'src/app/Services/get-user-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private userApi: GetUserInfoService, private repoApi: GetRepoInfoService) { }

  ngOnInit(): void {
  }

  getTheUser ( form: NgForm ) {
    this.userApi.searchUser(form.value.username).subscribe(data => console.log(data))
  }

  getRepo (form: NgForm) {
    this.repoApi.searchRepo( form.value.repo )
    }
  
}
