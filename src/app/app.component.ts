import { Component } from '@angular/core';
import { faSearchengin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-Search';
  searchIcon: IconDefinition = faSearchengin
  homeIcon: IconDefinition =faHouse
}
