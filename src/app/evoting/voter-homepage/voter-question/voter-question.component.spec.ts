import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterQuestionComponent } from './voter-question.component';

describe('VoterQuestionComponent', () => {
  let component: VoterQuestionComponent;
  let fixture: ComponentFixture<VoterQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
