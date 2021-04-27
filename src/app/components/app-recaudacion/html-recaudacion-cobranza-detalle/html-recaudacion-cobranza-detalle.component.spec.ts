import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlRecaudacionCobranzaDetalleComponent} from './html-recaudacion-cobranza-detalle.component';

describe('RecaudacionCobranzaDetalleComponent', () => {
  let component: HtmlRecaudacionCobranzaDetalleComponent;
  let fixture: ComponentFixture<HtmlRecaudacionCobranzaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlRecaudacionCobranzaDetalleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlRecaudacionCobranzaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
