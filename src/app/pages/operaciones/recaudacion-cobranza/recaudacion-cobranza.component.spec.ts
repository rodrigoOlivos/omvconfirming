import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudacionCobranzaComponent } from './recaudacion-cobranza.component';

describe('RecaudacionCobranzaComponent', () => {
  let component: RecaudacionCobranzaComponent;
  let fixture: ComponentFixture<RecaudacionCobranzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecaudacionCobranzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaudacionCobranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
