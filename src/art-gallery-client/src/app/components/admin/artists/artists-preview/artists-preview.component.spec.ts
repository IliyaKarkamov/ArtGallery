import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsPreviewComponent } from './artists-preview.component';

describe('ArtistsPreviewComponent', () => {
  let component: ArtistsPreviewComponent;
  let fixture: ComponentFixture<ArtistsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
