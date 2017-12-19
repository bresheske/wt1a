import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-oshkosh-credit',
  templateUrl: './oshkosh-credit.component.html',
  styleUrls: ['./oshkosh-credit.component.css']
})
export class OshkoshCreditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.oshkosh-wrapper > *');
  }

}
