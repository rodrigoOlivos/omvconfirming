import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputLineaDisponiComponent} from './html-input-linea-disponi.component';

describe('HtmlInputLineaDisponiComponent', () => {
  let component: HtmlInputLineaDisponiComponent;
  let fixture: ComponentFixture<HtmlInputLineaDisponiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputLineaDisponiComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputLineaDisponiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
