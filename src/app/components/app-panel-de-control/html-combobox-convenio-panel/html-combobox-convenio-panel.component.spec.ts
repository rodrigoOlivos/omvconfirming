import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComboboxConvenioPanelComponent } from './html-combobox-convenio-panel.component';

describe('HtmlComboboxConvenioPanelComponent', () => {
  let component: HtmlComboboxConvenioPanelComponent;
  let fixture: ComponentFixture<HtmlComboboxConvenioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComboboxConvenioPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComboboxConvenioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
