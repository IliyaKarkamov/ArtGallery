import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactsPreviewComponent } from './artefacts-preview.component';

describe('ArtefactsPreviewComponent', () => {
  let component: ArtefactsPreviewComponent;
  let fixture: ComponentFixture<ArtefactsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
