import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssHomepageComponent } from './ess-homepage.component';

describe('EssHomepageComponent', () => {
  let component: EssHomepageComponent;
  let fixture: ComponentFixture<EssHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
