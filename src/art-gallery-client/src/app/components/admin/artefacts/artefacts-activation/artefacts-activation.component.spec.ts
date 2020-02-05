import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactsActivationComponent } from './artefacts-activation.component';

describe('ArtefactsActivationComponent', () => {
  let component: ArtefactsActivationComponent;
  let fixture: ComponentFixture<ArtefactsActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactsActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactsActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
