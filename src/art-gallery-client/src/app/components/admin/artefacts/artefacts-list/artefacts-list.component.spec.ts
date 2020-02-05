import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtefactsListComponent } from './artefacts-list.component';

describe('ArtefactsListComponent', () => {
  let component: ArtefactsListComponent;
  let fixture: ComponentFixture<ArtefactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtefactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtefactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
