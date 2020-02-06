import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArtistsComponent } from './last-artists.component';

describe('LastArtistsComponent', () => {
  let component: LastArtistsComponent;
  let fixture: ComponentFixture<LastArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
