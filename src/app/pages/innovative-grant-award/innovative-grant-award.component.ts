import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-innovative-grant-award',
  templateUrl: './innovative-grant-award.component.html',
  styleUrls: ['./innovative-grant-award.component.css']
})
export class InnovativeGrantAwardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.innovative-grant-wrapper > *');
  }

}
