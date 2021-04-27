import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputLineaUtilizaComponent} from './html-input-linea-utiliza.component';

describe('HtmlInputLineaUtilizaComponent', () => {
  let component: HtmlInputLineaUtilizaComponent;
  let fixture: ComponentFixture<HtmlInputLineaUtilizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputLineaUtilizaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputLineaUtilizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
