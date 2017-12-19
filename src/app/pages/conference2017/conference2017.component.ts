import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-conference2017',
  templateUrl: './conference2017.component.html',
  styleUrls: ['./conference2017.component.css']
})
export class Conference2017Component implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.conf-container > *');
  }

}
