import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.contact-wrapper > *');
  }

}
