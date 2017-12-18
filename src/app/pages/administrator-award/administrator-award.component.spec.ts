import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorAwardComponent } from './administrator-award.component';

describe('AdministratorAwardComponent', () => {
  let component: AdministratorAwardComponent;
  let fixture: ComponentFixture<AdministratorAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
