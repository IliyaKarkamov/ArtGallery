import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasListComponent } from './eras-list.component';

describe('ErasListComponent', () => {
  let component: ErasListComponent;
  let fixture: ComponentFixture<ErasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
