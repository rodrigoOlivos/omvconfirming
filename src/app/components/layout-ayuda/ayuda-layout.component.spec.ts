import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaLayoutComponent } from './ayuda-layout.component';

describe('AyudaLayoutComponent', () => {
  let component: AyudaLayoutComponent;
  let fixture: ComponentFixture<AyudaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
