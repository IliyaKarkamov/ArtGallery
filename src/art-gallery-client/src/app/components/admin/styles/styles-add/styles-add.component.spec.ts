import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesAddComponent } from './styles-add.component';

describe('StylesAddComponent', () => {
  let component: StylesAddComponent;
  let fixture: ComponentFixture<StylesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
