import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableRechazadasComponent } from './ngx-datatable-rechazadas.component';

describe('NgxDatatableRechazadasComponent', () => {
  let component: NgxDatatableRechazadasComponent;
  let fixture: ComponentFixture<NgxDatatableRechazadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableRechazadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
