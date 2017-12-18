import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingServiceAwardComponent } from './outstanding-service-award.component';

describe('OutstandingServiceAwardComponent', () => {
  let component: OutstandingServiceAwardComponent;
  let fixture: ComponentFixture<OutstandingServiceAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutstandingServiceAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstandingServiceAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
