import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { GetUserInfoService } from 'src/app/Services/get-user-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private api: GetUserInfoService) { }

  ngOnInit(): void {
  }

  getTheUser ( form: NgForm ) {
    this.api.searchUser(form.value.username).subscribe(data => console.log(data))
  }
}
