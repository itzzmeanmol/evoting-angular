import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcaHomepageComponent } from './eca-homepage.component';

describe('EcaHomepageComponent', () => {
  let component: EcaHomepageComponent;
  let fixture: ComponentFixture<EcaHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcaHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcaHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
