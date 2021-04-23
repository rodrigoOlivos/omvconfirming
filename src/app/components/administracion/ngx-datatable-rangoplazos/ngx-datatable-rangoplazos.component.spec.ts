import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableRangoplazosComponent } from './ngx-datatable-rangoplazos.component';

describe('NgxDatatableRangoplazosComponent', () => {
  let component: NgxDatatableRangoplazosComponent;
  let fixture: ComponentFixture<NgxDatatableRangoplazosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableRangoplazosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableRangoplazosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
