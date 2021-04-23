import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableTasasComponent } from './ngx-datatable-tasas.component';

describe('NgxDatatableTasasComponent', () => {
  let component: NgxDatatableTasasComponent;
  let fixture: ComponentFixture<NgxDatatableTasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDatatableTasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableTasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
