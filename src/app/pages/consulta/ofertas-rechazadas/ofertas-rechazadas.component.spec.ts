import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasRechazadasComponent } from './ofertas-rechazadas.component';

describe('OfertasRechazadasComponent', () => {
  let component: OfertasRechazadasComponent;
  let fixture: ComponentFixture<OfertasRechazadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasRechazadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
