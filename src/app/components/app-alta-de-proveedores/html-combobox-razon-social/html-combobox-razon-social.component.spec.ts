import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComboboxRazonSocialComponent } from './html-combobox-razon-social.component';

describe('HtmlComboboxRazonSocialComponent', () => {
  let component: HtmlComboboxRazonSocialComponent;
  let fixture: ComponentFixture<HtmlComboboxRazonSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComboboxRazonSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComboboxRazonSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
