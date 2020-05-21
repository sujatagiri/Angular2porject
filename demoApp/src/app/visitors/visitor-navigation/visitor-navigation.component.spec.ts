import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorNavigationComponent } from './visitor-navigation.component';

describe('VisitorNavigationComponent', () => {
  let component: VisitorNavigationComponent;
  let fixture: ComponentFixture<VisitorNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
