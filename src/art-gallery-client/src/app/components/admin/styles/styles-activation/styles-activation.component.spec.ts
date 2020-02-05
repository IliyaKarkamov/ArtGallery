import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesActivationComponent } from './styles-activation.component';

describe('StylesActivationComponent', () => {
  let component: StylesActivationComponent;
  let fixture: ComponentFixture<StylesActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
