import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasPorProveedorComponent } from './ofertas-por-proveedor.component';

describe('OfertasPorProveedorComponent', () => {
  let component: OfertasPorProveedorComponent;
  let fixture: ComponentFixture<OfertasPorProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasPorProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasPorProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
