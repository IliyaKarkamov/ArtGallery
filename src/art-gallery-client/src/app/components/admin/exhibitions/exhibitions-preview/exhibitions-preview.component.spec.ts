import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsPreviewComponent } from './exhibitions-preview.component';

describe('ExhibitionsPreviewComponent', () => {
  let component: ExhibitionsPreviewComponent;
  let fixture: ComponentFixture<ExhibitionsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
