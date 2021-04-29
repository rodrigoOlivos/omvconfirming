import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatablePendientesComponent } from './ngx-datatable-pendientes.component';

describe('NgxDatatablePendientesComponent', () => {
  let component: NgxDatatablePendientesComponent;
  let fixture: ComponentFixture<NgxDatatablePendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatablePendientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatablePendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
