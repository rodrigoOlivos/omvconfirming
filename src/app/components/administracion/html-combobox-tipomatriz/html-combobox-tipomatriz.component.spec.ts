import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComboboxTipomatrizComponent } from './html-combobox-tipomatriz.component';

describe('HtmlComboboxTipomatrizComponent', () => {
  let component: HtmlComboboxTipomatrizComponent;
  let fixture: ComponentFixture<HtmlComboboxTipomatrizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComboboxTipomatrizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComboboxTipomatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
