import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasPreviewComponent } from './eras-preview.component';

describe('ErasPreviewComponent', () => {
  let component: ErasPreviewComponent;
  let fixture: ComponentFixture<ErasPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErasPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErasPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
