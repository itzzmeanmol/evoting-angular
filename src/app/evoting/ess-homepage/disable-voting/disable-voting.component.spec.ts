import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableVotingComponent } from './disable-voting.component';

describe('DisableVotingComponent', () => {
  let component: DisableVotingComponent;
  let fixture: ComponentFixture<DisableVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
