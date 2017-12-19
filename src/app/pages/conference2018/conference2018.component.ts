import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-conference2018',
  templateUrl: './conference2018.component.html',
  styleUrls: ['./conference2018.component.css']
})
export class Conference2018Component implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.conf-wrapper > *');
  }

}
