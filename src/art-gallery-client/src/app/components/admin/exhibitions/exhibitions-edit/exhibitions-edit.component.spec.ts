import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsEditComponent } from './exhibitions-edit.component';

describe('ExhibitionsEditComponent', () => {
  let component: ExhibitionsEditComponent;
  let fixture: ComponentFixture<ExhibitionsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
