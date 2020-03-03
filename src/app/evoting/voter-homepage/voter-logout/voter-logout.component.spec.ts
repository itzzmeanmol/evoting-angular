import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterLogoutComponent } from './voter-logout.component';

describe('VoterLogoutComponent', () => {
  let component: VoterLogoutComponent;
  let fixture: ComponentFixture<VoterLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
