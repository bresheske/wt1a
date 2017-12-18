import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-outstanding-service-award',
  templateUrl: './outstanding-service-award.component.html',
  styleUrls: ['./outstanding-service-award.component.css']
})
export class OutstandingServiceAwardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.outstanding-wrapper > *');
  }

}
