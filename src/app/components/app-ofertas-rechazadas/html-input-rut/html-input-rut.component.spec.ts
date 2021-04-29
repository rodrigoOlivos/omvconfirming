import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlInputRutComponent } from './html-input-rut.component';

describe('HtmlInputRutComponent', () => {
  let component: HtmlInputRutComponent;
  let fixture: ComponentFixture<HtmlInputRutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlInputRutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputRutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
