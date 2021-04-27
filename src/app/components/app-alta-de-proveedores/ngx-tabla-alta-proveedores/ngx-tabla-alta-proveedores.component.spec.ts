import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTablaAltaProveedoresComponent } from './ngx-tabla-alta-proveedores.component';

describe('NgxTablaAltaProveedoresComponent', () => {
  let component: NgxTablaAltaProveedoresComponent;
  let fixture: ComponentFixture<NgxTablaAltaProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTablaAltaProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTablaAltaProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
