import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesActivationComponent } from './galleries-activation.component';

describe('GalleriesActivationComponent', () => {
  let component: GalleriesActivationComponent;
  let fixture: ComponentFixture<GalleriesActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
