import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactsAddComponent } from './artefacts-add.component';

describe('ArtefactsAddComponent', () => {
  let component: ArtefactsAddComponent;
  let fixture: ComponentFixture<ArtefactsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
