import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputCanalDeCargaComponent} from './html-input-canal-de-carga.component';

describe('HtmlInputCanalDeCargaComponent', () => {
  let component: HtmlInputCanalDeCargaComponent;
  let fixture: ComponentFixture<HtmlInputCanalDeCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputCanalDeCargaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputCanalDeCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
