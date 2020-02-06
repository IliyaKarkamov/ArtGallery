import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArtefactsComponent } from './last-artefacts.component';

describe('LastArtefactsComponent', () => {
  let component: LastArtefactsComponent;
  let fixture: ComponentFixture<LastArtefactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastArtefactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastArtefactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
