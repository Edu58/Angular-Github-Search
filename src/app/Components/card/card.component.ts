import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
} )
export class CardComponent implements OnInit {

  @Input() repoName!: string
  @Input() repoOwner!: string
  @Input() repoUrl!: string
  @Input() repoDescription!: string
  @Input() repoSize!: number
  @Input() repoLanguage!: string
  @Input() repoLicense!: string
  @Input() repoAllowForking!: boolean
  @Input() repoVisibility!: string
  @Input() repoForks!: number
  @Input() createdAt!: Date
  @Input() updatedOn!: Date
  @Input() name!: string
  @Input() profile!: string
  @Input() avatar!: string

  constructor () { }

  ngOnInit (): void {
  }

}
