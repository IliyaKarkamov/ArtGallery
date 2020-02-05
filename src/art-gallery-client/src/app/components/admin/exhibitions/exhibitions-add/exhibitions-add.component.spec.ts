import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionsAddComponent } from './exhibitions-add.component';

describe('ExhibitionsAddComponent', () => {
  let component: ExhibitionsAddComponent;
  let fixture: ComponentFixture<ExhibitionsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
