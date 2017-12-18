import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.history-wrapper > *');
  }

}
