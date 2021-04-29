import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableResumenComponent } from './ngx-datatable-resumen.component';

describe('NgxDatatableResumenComponent', () => {
  let component: NgxDatatableResumenComponent;
  let fixture: ComponentFixture<NgxDatatableResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
