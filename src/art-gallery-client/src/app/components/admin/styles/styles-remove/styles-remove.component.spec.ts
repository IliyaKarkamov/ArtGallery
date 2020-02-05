import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesRemoveComponent } from './styles-remove.component';

describe('StylesRemoveComponent', () => {
  let component: StylesRemoveComponent;
  let fixture: ComponentFixture<StylesRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
