import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBotoneraTmcComponent } from './html-botonera-tmc.component';

describe('HtmlBotoneraTmcComponent', () => {
  let component: HtmlBotoneraTmcComponent;
  let fixture: ComponentFixture<HtmlBotoneraTmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBotoneraTmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBotoneraTmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
