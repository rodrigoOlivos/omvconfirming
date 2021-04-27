import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBotonBuscarComponent } from './html-boton-buscar.component';

describe('HtmlBotonBuscarComponent', () => {
  let component: HtmlBotonBuscarComponent;
  let fixture: ComponentFixture<HtmlBotonBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBotonBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBotonBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
