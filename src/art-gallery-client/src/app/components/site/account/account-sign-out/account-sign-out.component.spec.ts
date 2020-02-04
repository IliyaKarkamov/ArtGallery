import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSignOutComponent } from './account-sign-out.component';

describe('AccountSignOutComponent', () => {
  let component: AccountSignOutComponent;
  let fixture: ComponentFixture<AccountSignOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSignOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
