import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSignInComponent } from './account-sign-in.component';

describe('AccountSignInComponent', () => {
  let component: AccountSignInComponent;
  let fixture: ComponentFixture<AccountSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
