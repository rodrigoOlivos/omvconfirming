import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HtmlInputFormatoComponent} from './html-input-formato.component';

describe('HtmlInputFormatoComponent', () => {
  let component: HtmlInputFormatoComponent;
  let fixture: ComponentFixture<HtmlInputFormatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlInputFormatoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlInputFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
