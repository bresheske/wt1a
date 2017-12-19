import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramProposalComponent } from './program-proposal.component';

describe('ProgramProposalComponent', () => {
  let component: ProgramProposalComponent;
  let fixture: ComponentFixture<ProgramProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
