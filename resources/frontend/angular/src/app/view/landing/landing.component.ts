import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { slideInLeft, slideInRight, slideInUp } from 'src/app/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [ slideInLeft, slideInRight, slideInUp ]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      Aos.init({ delay: 300, once: true });
  }

}
