import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlComboboxClienteComponent} from './html-combobox-cliente.component';

describe('HtmlComboboxClienteComponent', () => {
  let component: HtmlComboboxClienteComponent;
  let fixture: ComponentFixture<HtmlComboboxClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlComboboxClienteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlComboboxClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
