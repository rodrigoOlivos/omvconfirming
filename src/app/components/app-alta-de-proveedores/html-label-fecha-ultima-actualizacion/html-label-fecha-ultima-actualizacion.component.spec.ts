import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLabelFechaUltimaActualizacionComponent } from './html-label-fecha-ultima-actualizacion.component';

describe('HtmlLabelFechaUltimaActualizacionComponent', () => {
  let component: HtmlLabelFechaUltimaActualizacionComponent;
  let fixture: ComponentFixture<HtmlLabelFechaUltimaActualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlLabelFechaUltimaActualizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLabelFechaUltimaActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
