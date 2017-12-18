import { Component, OnInit } from '@angular/core';
import { Reveal } from '../../static/reveal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public HIDE:string = "hide-on-small-only";
  public SHOW:string = "";

  public hideClass:string = this.HIDE;

  constructor(router:Router) {
    router.events.subscribe((event) => {
      this.hideMenu();
    });
  }

  public hideMenu() {
    this.hideClass = this.HIDE;
  }

  public toggleMenu() {
    this.hideClass = (this.hideClass == this.HIDE)
      ? this.SHOW
      : this.HIDE;
  }

  ngOnInit() {
    Reveal.reveal('.collection-item');
  }

}
