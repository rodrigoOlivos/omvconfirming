import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLabelRutProveedoresComponent } from './html-label-rut-proveedores.component';

describe('HtmlLabelRutProveedoresComponent', () => {
  let component: HtmlLabelRutProveedoresComponent;
  let fixture: ComponentFixture<HtmlLabelRutProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlLabelRutProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLabelRutProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
