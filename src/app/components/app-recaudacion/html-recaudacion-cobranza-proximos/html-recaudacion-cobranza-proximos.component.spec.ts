import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlRecaudacionCobranzaProximosComponent} from './html-recaudacion-cobranza-proximos.component';

describe('RecaudacionCobranzaProximosComponent', () => {
  let component: HtmlRecaudacionCobranzaProximosComponent;
  let fixture: ComponentFixture<HtmlRecaudacionCobranzaProximosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlRecaudacionCobranzaProximosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlRecaudacionCobranzaProximosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
