import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableResultadoComponent } from './ngx-datatable-resultado.component';

describe('NgxDatatableResultadoComponent', () => {
  let component: NgxDatatableResultadoComponent;
  let fixture: ComponentFixture<NgxDatatableResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
