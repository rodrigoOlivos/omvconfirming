import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTablaCostoFondoComponent } from './ngx-tabla-costo-fondo.component';

describe('NgxTablaCostoFondoComponent', () => {
  let component: NgxTablaCostoFondoComponent;
  let fixture: ComponentFixture<NgxTablaCostoFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTablaCostoFondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTablaCostoFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
