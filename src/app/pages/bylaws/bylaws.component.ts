import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-bylaws',
  templateUrl: './bylaws.component.html',
  styleUrls: ['./bylaws.component.css']
})
export class BylawsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.laws-wrapper > *');
  }

}
