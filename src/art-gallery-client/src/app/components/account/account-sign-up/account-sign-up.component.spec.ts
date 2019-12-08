import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSignUpComponent } from './account-sign-up.component';

describe('AccountSignUpComponent', () => {
  let component: AccountSignUpComponent;
  let fixture: ComponentFixture<AccountSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
