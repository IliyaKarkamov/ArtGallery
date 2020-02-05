import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasEditComponent } from './eras-edit.component';

describe('ErasEditComponent', () => {
  let component: ErasEditComponent;
  let fixture: ComponentFixture<ErasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
