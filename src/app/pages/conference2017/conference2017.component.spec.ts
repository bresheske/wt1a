import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conference2017Component } from './conference2017.component';

describe('Conference2017Component', () => {
  let component: Conference2017Component;
  let fixture: ComponentFixture<Conference2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conference2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
