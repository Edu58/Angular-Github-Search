import { Component, Input, OnInit } from '@angular/core';
import { Repomodel } from 'src/app/Models/repomodel';
import { User } from 'src/app/Models/repouser';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit {

  @Input() receivedResult!: any
  // @Input() receivedUserResult!: User | any

  constructor() { }

  ngOnInit(): void {
  }

}
