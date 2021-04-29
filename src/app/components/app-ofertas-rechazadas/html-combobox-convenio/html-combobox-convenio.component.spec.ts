import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlComboboxConvenioComponent } from './html-combobox-convenio.component';

describe('HtmlComboboxConvenioComponent', () => {
  let component: HtmlComboboxConvenioComponent;
  let fixture: ComponentFixture<HtmlComboboxConvenioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlComboboxConvenioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComboboxConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
