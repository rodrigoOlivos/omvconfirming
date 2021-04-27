import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputLineaAutorizComponent} from './html-input-linea-autoriz.component';

describe('HtmlInputLineaAutorizComponent', () => {
  let component: HtmlInputLineaAutorizComponent;
  let fixture: ComponentFixture<HtmlInputLineaAutorizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputLineaAutorizComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputLineaAutorizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
