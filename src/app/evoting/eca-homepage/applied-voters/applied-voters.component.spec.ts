import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedVotersComponent } from './applied-voters.component';

describe('AppliedVotersComponent', () => {
  let component: AppliedVotersComponent;
  let fixture: ComponentFixture<AppliedVotersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedVotersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
