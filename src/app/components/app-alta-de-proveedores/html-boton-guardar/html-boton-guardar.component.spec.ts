import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBotonGuardarComponent } from './html-boton-guardar.component';

describe('HtmlBotonGuardarComponent', () => {
  let component: HtmlBotonGuardarComponent;
  let fixture: ComponentFixture<HtmlBotonGuardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBotonGuardarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBotonGuardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
