import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlOfertasPorProveedorCursadasComponent } from './html-ofertas-por-proveedor-cursadas.component';

describe('OfertasPorProveedorCursadasComponent', () => {
  let component: HtmlOfertasPorProveedorCursadasComponent;
  let fixture: ComponentFixture<HtmlOfertasPorProveedorCursadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlOfertasPorProveedorCursadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlOfertasPorProveedorCursadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
