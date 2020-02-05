import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsActivationComponent } from './artists-activation.component';

describe('ArtistsActivationComponent', () => {
  let component: ArtistsActivationComponent;
  let fixture: ComponentFixture<ArtistsActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
