import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorDetailPageComponent } from './visitor-detail-page.component';

describe('VisitorDetailPageComponent', () => {
  let component: VisitorDetailPageComponent;
  let fixture: ComponentFixture<VisitorDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
