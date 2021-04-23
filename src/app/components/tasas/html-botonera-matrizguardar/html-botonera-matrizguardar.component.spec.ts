import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBotoneraMatrizguardarComponent } from './html-botonera-matrizguardar.component';

describe('HtmlBotoneraMatrizguardarComponent', () => {
  let component: HtmlBotoneraMatrizguardarComponent;
  let fixture: ComponentFixture<HtmlBotoneraMatrizguardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlBotoneraMatrizguardarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlBotoneraMatrizguardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
