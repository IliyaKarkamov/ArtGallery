import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewArtefactComponent } from './preview-artefact.component';

describe('PreviewArtefactComponent', () => {
  let component: PreviewArtefactComponent;
  let fixture: ComponentFixture<PreviewArtefactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewArtefactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewArtefactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
