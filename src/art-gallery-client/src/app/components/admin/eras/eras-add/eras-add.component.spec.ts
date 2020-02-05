import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasAddComponent } from './eras-add.component';

describe('ErasAddComponent', () => {
  let component: ErasAddComponent;
  let fixture: ComponentFixture<ErasAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErasAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
