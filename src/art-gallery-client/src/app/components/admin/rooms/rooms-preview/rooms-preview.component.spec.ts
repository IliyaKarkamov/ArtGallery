import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsPreviewComponent } from './rooms-preview.component';

describe('RoomsPreviewComponent', () => {
  let component: RoomsPreviewComponent;
  let fixture: ComponentFixture<RoomsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
