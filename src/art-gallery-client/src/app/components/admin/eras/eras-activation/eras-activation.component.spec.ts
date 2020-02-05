import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasActivationComponent } from './eras-activation.component';

describe('ErasActivationComponent', () => {
  let component: ErasActivationComponent;
  let fixture: ComponentFixture<ErasActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErasActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErasActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
