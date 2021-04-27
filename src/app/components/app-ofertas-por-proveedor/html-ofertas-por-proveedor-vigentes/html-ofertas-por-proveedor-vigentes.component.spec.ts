import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlOfertasPorProveedorVigentesComponent } from './html-ofertas-por-proveedor-vigentes.component';

describe('OfertasPorProveedorVigentesComponent', () => {
  let component: HtmlOfertasPorProveedorVigentesComponent;
  let fixture: ComponentFixture<HtmlOfertasPorProveedorVigentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlOfertasPorProveedorVigentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlOfertasPorProveedorVigentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
