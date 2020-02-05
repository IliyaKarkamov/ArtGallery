import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesPreviewComponent } from './styles-preview.component';

describe('StylesPreviewComponent', () => {
  let component: StylesPreviewComponent;
  let fixture: ComponentFixture<StylesPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
