import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxDatatableCargasComponent} from './ngx-datatable-cargas.component';

describe('NgxDatatableCargasComponent', () => {
  let component: NgxDatatableCargasComponent;
  let fixture: ComponentFixture<NgxDatatableCargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDatatableCargasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
