import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableOfertasComponent } from './ngx-datatable-ofertas.component';

describe('NgxDatatableOfertasComponent', () => {
  let component: NgxDatatableOfertasComponent;
  let fixture: ComponentFixture<NgxDatatableOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
