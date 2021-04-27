import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLabelFechaUltActComponent } from './html-label-fecha-ult-act.component';

describe('HtmlInputFechaUltActComponent', () => {
  let component: HtmlLabelFechaUltActComponent;
  let fixture: ComponentFixture<HtmlLabelFechaUltActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlLabelFechaUltActComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLabelFechaUltActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
