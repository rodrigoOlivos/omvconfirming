import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputInteresMoraComponent} from './html-input-interes-mora.component';

describe('HtmlInputInteresMoraComponent', () => {
  let component: HtmlInputInteresMoraComponent;
  let fixture: ComponentFixture<HtmlInputInteresMoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputInteresMoraComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputInteresMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
