import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterHomepageComponent } from './voter-homepage.component';

describe('VoterHomepageComponent', () => {
  let component: VoterHomepageComponent;
  let fixture: ComponentFixture<VoterHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
