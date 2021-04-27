import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTablaSpreadProveedorComponent } from './ngx-tabla-spread-proveedor.component';

describe('NgxTablaSpreadProveedorComponent', () => {
  let component: NgxTablaSpreadProveedorComponent;
  let fixture: ComponentFixture<NgxTablaSpreadProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTablaSpreadProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTablaSpreadProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
