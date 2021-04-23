import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLabelFechaactualizacionComponent } from './html-label-fechaactualizacion.component';

describe('HtmlLabelFechaactualizacionComponent', () => {
  let component: HtmlLabelFechaactualizacionComponent;
  let fixture: ComponentFixture<HtmlLabelFechaactualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlLabelFechaactualizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLabelFechaactualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
