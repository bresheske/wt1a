import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OshkoshCreditComponent } from './oshkosh-credit.component';

describe('OshkoshCreditComponent', () => {
  let component: OshkoshCreditComponent;
  let fixture: ComponentFixture<OshkoshCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OshkoshCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OshkoshCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
