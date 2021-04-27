import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableTmcComponent } from './ngx-datatable-tmc.component';

describe('NgxDatatableTmcComponent', () => {
  let component: NgxDatatableTmcComponent;
  let fixture: ComponentFixture<NgxDatatableTmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableTmcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableTmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
