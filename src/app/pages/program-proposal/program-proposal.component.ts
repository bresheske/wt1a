import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';

@Component({
  selector: 'app-program-proposal',
  templateUrl: './program-proposal.component.html',
  styleUrls: ['./program-proposal.component.css']
})
export class ProgramProposalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Reveal.reveal('.proposal-wrapper > *');
  }

}
