import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBotoneraMatrizSpreadClienteComponent } from './html-botonera-matriz-spread-cliente.component';

describe('HtmlBotoneraMatrizSpreadClienteComponent', () => {
  let component: HtmlBotoneraMatrizSpreadClienteComponent;
  let fixture: ComponentFixture<HtmlBotoneraMatrizSpreadClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBotoneraMatrizSpreadClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBotoneraMatrizSpreadClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
