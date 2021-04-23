import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableRangomontosComponent } from './ngx-datatable-rangomontos.component';

describe('NgxDatatableRangomontosComponent', () => {
  let component: NgxDatatableRangomontosComponent;
  let fixture: ComponentFixture<NgxDatatableRangomontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableRangomontosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableRangomontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
