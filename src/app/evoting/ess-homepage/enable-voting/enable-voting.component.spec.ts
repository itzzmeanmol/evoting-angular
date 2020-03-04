import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableVotingComponent } from './enable-voting.component';

describe('EnableVotingComponent', () => {
  let component: EnableVotingComponent;
  let fixture: ComponentFixture<EnableVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnableVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
