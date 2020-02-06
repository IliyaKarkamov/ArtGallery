import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastExhibitionsComponent } from './last-exhibitions.component';

describe('LastExhibitionsComponent', () => {
  let component: LastExhibitionsComponent;
  let fixture: ComponentFixture<LastExhibitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastExhibitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
