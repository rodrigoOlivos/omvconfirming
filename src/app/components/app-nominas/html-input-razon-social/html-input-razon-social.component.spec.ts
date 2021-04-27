import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputRazonSocialComponent} from './html-input-razon-social.component';

describe('HtmlInputRazonSocialComponent', () => {
  let component: HtmlInputRazonSocialComponent;
  let fixture: ComponentFixture<HtmlInputRazonSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputRazonSocialComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputRazonSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
