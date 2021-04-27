import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputNombreFantasiaComponent} from './html-input-nombre-fantasia.component';

describe('HtmlInputNombreFantasiaComponent', () => {
  let component: HtmlInputNombreFantasiaComponent;
  let fixture: ComponentFixture<HtmlInputNombreFantasiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputNombreFantasiaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputNombreFantasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
