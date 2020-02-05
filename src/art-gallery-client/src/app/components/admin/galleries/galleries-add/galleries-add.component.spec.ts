import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesAddComponent } from './galleries-add.component';

describe('GalleriesAddComponent', () => {
  let component: GalleriesAddComponent;
  let fixture: ComponentFixture<GalleriesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
