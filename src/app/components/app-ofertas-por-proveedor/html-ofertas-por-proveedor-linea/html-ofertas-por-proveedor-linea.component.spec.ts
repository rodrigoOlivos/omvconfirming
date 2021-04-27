import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlOfertasPorProveedorLineaComponent } from './html-ofertas-por-proveedor-linea.component';

describe('OfertasPorProveedorLineaComponent', () => {
  let component: HtmlOfertasPorProveedorLineaComponent;
  let fixture: ComponentFixture<HtmlOfertasPorProveedorLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlOfertasPorProveedorLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlOfertasPorProveedorLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
