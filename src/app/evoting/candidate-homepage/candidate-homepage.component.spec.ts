import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateHomepageComponent } from './candidate-homepage.component';

describe('CandidateHomepageComponent', () => {
  let component: CandidateHomepageComponent;
  let fixture: ComponentFixture<CandidateHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
