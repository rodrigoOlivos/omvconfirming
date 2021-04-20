import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasPendientesComponent } from './ofertas-pendientes.component';

describe('OfertasPendientesComponent', () => {
  let component: OfertasPendientesComponent;
  let fixture: ComponentFixture<OfertasPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasPendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
