import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2018Component } from './conference2018.component';

describe('Conference2018Component', () => {
  let component: Conference2018Component;
  let fixture: ComponentFixture<Conference2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conference2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
