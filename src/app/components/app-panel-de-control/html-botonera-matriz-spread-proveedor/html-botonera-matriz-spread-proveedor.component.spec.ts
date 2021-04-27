import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBotoneraMatrizSpreadProveedorComponent } from './html-botonera-matriz-spread-proveedor.component';

describe('HtmlBotoneraMatrizSpreadProveedorComponent', () => {
  let component: HtmlBotoneraMatrizSpreadProveedorComponent;
  let fixture: ComponentFixture<HtmlBotoneraMatrizSpreadProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBotoneraMatrizSpreadProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBotoneraMatrizSpreadProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
