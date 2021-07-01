import { Component } from '@angular/core';
import { slideInUp, slideInLeft, slideInRight } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInLeft, slideInRight, slideInUp ]
})

export class AppComponent {
  title = 'angular';
}
