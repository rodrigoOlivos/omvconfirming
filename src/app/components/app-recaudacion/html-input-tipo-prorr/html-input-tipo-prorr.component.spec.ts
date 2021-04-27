import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputTipoProrrComponent} from './html-input-tipo-prorr.component';

describe('HtmlInputTipoProrrComponent', () => {
  let component: HtmlInputTipoProrrComponent;
  let fixture: ComponentFixture<HtmlInputTipoProrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputTipoProrrComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputTipoProrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
