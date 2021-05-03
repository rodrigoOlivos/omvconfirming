import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSessionOutComponent } from './layout-session-out.component';

describe('LayoutSessionOutComponent', () => {
  let component: LayoutSessionOutComponent;
  let fixture: ComponentFixture<LayoutSessionOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSessionOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSessionOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
