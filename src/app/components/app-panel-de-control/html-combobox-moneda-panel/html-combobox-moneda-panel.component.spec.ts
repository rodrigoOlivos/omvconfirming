import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComboboxMonedaPanelComponent } from './html-combobox-moneda-panel.component';

describe('HtmlComboboxMonedaPanelComponent', () => {
  let component: HtmlComboboxMonedaPanelComponent;
  let fixture: ComponentFixture<HtmlComboboxMonedaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComboboxMonedaPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComboboxMonedaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
