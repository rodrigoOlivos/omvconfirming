import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableDocOfertasComponent } from './ngx-datatable-doc-ofertas.component';

describe('NgxDatatableDocOfertasComponent', () => {
  let component: NgxDatatableDocOfertasComponent;
  let fixture: ComponentFixture<NgxDatatableDocOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableDocOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableDocOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
