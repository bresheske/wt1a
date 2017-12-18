import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovativeGrantAwardComponent } from './innovative-grant-award.component';

describe('InnovativeGrantAwardComponent', () => {
  let component: InnovativeGrantAwardComponent;
  let fixture: ComponentFixture<InnovativeGrantAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovativeGrantAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovativeGrantAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
