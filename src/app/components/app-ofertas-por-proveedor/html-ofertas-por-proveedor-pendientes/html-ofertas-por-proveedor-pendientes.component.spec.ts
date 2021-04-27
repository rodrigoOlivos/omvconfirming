import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlOfertasPorProveedorPendientesComponent } from './html-ofertas-por-proveedor-pendientes.component';

describe('OfertasPorProveedorPendientesComponent', () => {
  let component: HtmlOfertasPorProveedorPendientesComponent;
  let fixture: ComponentFixture<HtmlOfertasPorProveedorPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlOfertasPorProveedorPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlOfertasPorProveedorPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
