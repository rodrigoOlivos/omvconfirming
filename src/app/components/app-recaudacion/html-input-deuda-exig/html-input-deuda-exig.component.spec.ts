import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputDeudaExigComponent} from './html-input-deuda-exig.component';

describe('HtmlInputDeudaExigComponent', () => {
  let component: HtmlInputDeudaExigComponent;
  let fixture: ComponentFixture<HtmlInputDeudaExigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputDeudaExigComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputDeudaExigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
