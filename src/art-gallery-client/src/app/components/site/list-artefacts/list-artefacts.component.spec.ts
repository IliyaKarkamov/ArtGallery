import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtefactsComponent } from './list-artefacts.component';

describe('ListArtefactsComponent', () => {
  let component: ListArtefactsComponent;
  let fixture: ComponentFixture<ListArtefactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArtefactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArtefactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
