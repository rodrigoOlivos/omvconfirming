import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComboboxClientePanelComponent } from './html-combobox-cliente-panel.component';

describe('HtmlComboboxClientePanelComponent', () => {
  let component: HtmlComboboxClientePanelComponent;
  let fixture: ComponentFixture<HtmlComboboxClientePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComboboxClientePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComboboxClientePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
