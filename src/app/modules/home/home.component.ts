import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';
declare let $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(() => {
      $('.parallax').parallax();
    });
    Reveal.reveal('.home-wrapper > *')
  }

}
