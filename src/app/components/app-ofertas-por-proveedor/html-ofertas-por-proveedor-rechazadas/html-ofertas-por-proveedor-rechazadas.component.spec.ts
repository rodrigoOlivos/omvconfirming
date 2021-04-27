import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlOfertasPorProveedorRechazadasComponent } from './html-ofertas-por-proveedor-rechazadas.component';

describe('OfertasPorProveedorRechazadasComponent', () => {
  let component: HtmlOfertasPorProveedorRechazadasComponent;
  let fixture: ComponentFixture<HtmlOfertasPorProveedorRechazadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlOfertasPorProveedorRechazadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlOfertasPorProveedorRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
