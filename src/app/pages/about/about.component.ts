import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.about-wrapper > *');
  }

}
