import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDatatableNominasComponent} from './ngx-datatable-nominas.component';

describe('NgxDatatableNominasComponent', () => {
  let component: NgxDatatableNominasComponent;
  let fixture: ComponentFixture<NgxDatatableNominasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDatatableNominasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableNominasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
