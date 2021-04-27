import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTablaSpreadClienteComponent } from './ngx-tabla-spread-cliente.component';

describe('NgxTablaSpreadClienteComponent', () => {
  let component: NgxTablaSpreadClienteComponent;
  let fixture: ComponentFixture<NgxTablaSpreadClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTablaSpreadClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTablaSpreadClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
