import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesPreviewComponent } from './galleries-preview.component';

describe('GalleriesPreviewComponent', () => {
  let component: GalleriesPreviewComponent;
  let fixture: ComponentFixture<GalleriesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
