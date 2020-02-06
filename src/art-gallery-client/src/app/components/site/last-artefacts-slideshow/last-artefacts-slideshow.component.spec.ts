import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LastArtefactsSlideshowComponent} from './last-artefacts-slideshow.component';

describe('LastArtefactsSlideshowComponent', () => {
  let component: LastArtefactsSlideshowComponent;
  let fixture: ComponentFixture<LastArtefactsSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastArtefactsSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastArtefactsSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
