import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.css']
})
export class CommitteeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.committee-wrapper > *');
  }

}
