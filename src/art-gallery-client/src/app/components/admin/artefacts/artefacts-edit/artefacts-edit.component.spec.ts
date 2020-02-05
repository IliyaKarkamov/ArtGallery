import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactsEditComponent } from './artefacts-edit.component';

describe('ArtefactsEditComponent', () => {
  let component: ArtefactsEditComponent;
  let fixture: ComponentFixture<ArtefactsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
