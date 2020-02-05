import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsActivationComponent } from './rooms-activation.component';

describe('RoomsActivationComponent', () => {
  let component: RoomsActivationComponent;
  let fixture: ComponentFixture<RoomsActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
