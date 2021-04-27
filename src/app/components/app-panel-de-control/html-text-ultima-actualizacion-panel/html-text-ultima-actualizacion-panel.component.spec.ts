import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTextUltimaActualizacionPanelComponent } from './html-text-ultima-actualizacion-panel.component';

describe('HtmlTextUltimaActualizacionPanelComponent', () => {
  let component: HtmlTextUltimaActualizacionPanelComponent;
  let fixture: ComponentFixture<HtmlTextUltimaActualizacionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlTextUltimaActualizacionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTextUltimaActualizacionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
