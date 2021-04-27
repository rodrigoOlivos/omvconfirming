import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlNominasCargasComponent} from './html-nominas-cargas.component';

describe('NominasCargasComponent', () => {
  let component: HtmlNominasCargasComponent;
  let fixture: ComponentFixture<HtmlNominasCargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlNominasCargasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlNominasCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
