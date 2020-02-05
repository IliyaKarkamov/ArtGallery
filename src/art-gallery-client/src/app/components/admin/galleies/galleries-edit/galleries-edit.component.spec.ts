import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesEditComponent } from './galleries-edit.component';

describe('GalleriesEditComponent', () => {
  let component: GalleriesEditComponent;
  let fixture: ComponentFixture<GalleriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
