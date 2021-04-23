import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComboboxMonedaComponent } from './html-combobox-moneda.component';

describe('HtmlComboboxMonedaComponent', () => {
  let component: HtmlComboboxMonedaComponent;
  let fixture: ComponentFixture<HtmlComboboxMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComboboxMonedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComboboxMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
