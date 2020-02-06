import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExhibitionsComponent } from './list-exhibitions.component';

describe('ListExhibitionsComponent', () => {
  let component: ListExhibitionsComponent;
  let fixture: ComponentFixture<ListExhibitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExhibitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
