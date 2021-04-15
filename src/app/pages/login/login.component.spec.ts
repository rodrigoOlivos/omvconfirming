import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentOld } from './login.component';

describe('LoginComponentOld', () => {
  let component: LoginComponentOld;
  let fixture: ComponentFixture<LoginComponentOld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponentOld ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponentOld);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
