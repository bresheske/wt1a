import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-administrator-award',
  templateUrl: './administrator-award.component.html',
  styleUrls: ['./administrator-award.component.css']
})
export class AdministratorAwardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.admin-wrapper > *');
  }

}
