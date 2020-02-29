import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvotingComponent } from './evoting.component';

describe('EvotingComponent', () => {
  let component: EvotingComponent;
  let fixture: ComponentFixture<EvotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
